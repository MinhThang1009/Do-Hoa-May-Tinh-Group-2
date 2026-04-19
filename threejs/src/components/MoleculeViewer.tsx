import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Maximize, Minimize } from "lucide-react";

type Props = {
  url: string;
  className?: string;
};

function ionFromObjectName(name: string): string | null {
  const n = name.trim();

  if (/cl/i.test(n)) return "Cl⁻";

  const first = n[0]?.toUpperCase();
  switch (first) {
    case "H":
      return "H⁺";
    case "O":
      return "O²⁻";
    case "N":
      return "N⁵⁺";
    case "S":
      return "S⁶⁺";
    default:
      return null;
  }
}

function stripBlenderLabels(object3d: THREE.Object3D) {
  const toRemove: THREE.Object3D[] = [];
  object3d.traverse((o: THREE.Object3D) => {
    if (typeof o.name === "string" && o.name.startsWith("Label_")) toRemove.push(o);
  });
  for (const o of toRemove) o.parent?.remove(o);
}

function frameCameraToObject(
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  object3d: THREE.Object3D
) {
  const box = new THREE.Box3().setFromObject(object3d);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  controls.target.copy(center);
  controls.update();

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = (camera.fov * Math.PI) / 180;
  let dist = maxDim / (2 * Math.tan(fov / 2));
  dist *= 1.45;

  camera.position.set(center.x, center.y + maxDim * 0.25, center.z + dist);
  camera.near = Math.max(0.01, dist / 100);
  camera.far = dist * 50;
  camera.updateProjectionMatrix();
}

export function MoleculeViewer({ url, className }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (getComputedStyle(host).position === "static") {
      host.style.position = "relative";
    }

    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.filter = "drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.3))"; // Giả lập Bloom bằng biến CSS Động
    canvas.setAttribute("data-lenis-prevent", "true"); // Master Bug Fix: Chặn Xung đột Cuộn Lenis khi Zoom 3D
    host.appendChild(canvas);

    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.left = "0px";
    tooltip.style.top = "0px";
    tooltip.style.transform = "translate(-9999px, -9999px)";
    tooltip.style.padding = "10px 12px";
    tooltip.style.borderRadius = "10px";
    tooltip.style.background = "var(--bg-1)";
    tooltip.style.border = "1px solid var(--border)";
    tooltip.style.color = "var(--text)";
    tooltip.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    tooltip.style.fontSize = "16px";
    tooltip.style.fontWeight = "800";
    tooltip.style.lineHeight = "1.15";
    tooltip.style.pointerEvents = "none";
    tooltip.style.whiteSpace = "nowrap";
    tooltip.style.backdropFilter = "blur(6px)";
    tooltip.style.transition = "opacity 0.2s ease";
    tooltip.style.opacity = "0";
    host.appendChild(tooltip);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    camera.position.set(0, 1.8, 4.5);

    // Cấp phát trong suốt để hiển thị Background từ DIV thay vì Solid Black của EffectComposer
    // Bỏ qua Post-processing để lấy alpha: true hoàn hảo

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.8;
    controls.enablePan = false; // Tắt kéo Pan để không dính thao tác cuộn trên điện thoại
    controls.enableZoom = true; // Cho phép Zoom Chuột/Kéo chụm ngón tay
    // Xóa khóa min/max distance để không xung đột với hàm tự động tính toán tiêu cự FrameCameraToObject
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2; // Giảm tốc độ AutoRotate để nhìn rõ 3D hơn

    scene.add(new THREE.AmbientLight(0xffffff, 1.35)); // Tăng sáng bù lại Bloom
    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(2.5, 4.5, 2);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xdbeafe, 0.8);
    fill.position.set(-2.5, 1.0, 2.5);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0x93c5fd, 0.9);
    rim.position.set(-3, 2, -3);
    scene.add(rim);

    const root = new THREE.Group();
    scene.add(root);

    let disposed = false;
    // Bỏ `dirty` flag vì autoRotate yêu cầu chạy liên tục mỗi 60FPS

    const raycaster = new THREE.Raycaster();
    const mouseNdc = new THREE.Vector2();
    let modelRoot: THREE.Object3D | null = null;

    // Lerp state cho tooltip quán tính
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let tooltipVisible = false;

    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf: any) => {
        if (disposed) return;
        setIsLoading(false); // Tắt hiệu ứng loading khi 3D tải xong
        const model = gltf.scene;
        stripBlenderLabels(model);

        model.traverse((child: any) => {
          if (child.isMesh && child.material) {
            child.material.roughness = Math.max(0.1, (child.material.roughness || 0.5) - 0.25);
            child.material.metalness = Math.min(0.8, (child.material.metalness || 0) + 0.15);

            if (child.material.isMeshStandardMaterial || child.material.isMeshPhysicalMaterial) {
              child.material.clearcoat = 1.0;
              child.material.clearcoatRoughness = 0.05; // Căng bóng mượt hơn
              child.material.envMapIntensity = 2.0; // Tăng phản quang gấp đôi
            }
          }
        });

        root.clear();
        root.add(model);
        modelRoot = model;
        frameCameraToObject(camera, controls, model);
      },
      undefined,
      () => {
      }
    );

    const onPointerMove = (ev: PointerEvent) => {
      if (!modelRoot) return;
      const rect = host.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      mouseNdc.x = (x / rect.width) * 2 - 1;
      mouseNdc.y = -(y / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseNdc, camera);

      const hits = raycaster.intersectObject(modelRoot, true);
      const hit = hits.find((h: any) => (h.object as any)?.isMesh);
      const name = hit?.object?.name || "";
      const ion = name ? ionFromObjectName(name) : null;

      if (!ion) {
        tooltipVisible = false;
        return;
      }

      tooltip.textContent = ion;
      tooltipVisible = true;
      const ox = 20;
      const oy = 20;
      targetX = Math.min(Math.max(8, x + ox), rect.width - 8);
      targetY = Math.min(Math.max(8, y + oy), rect.height - 8);
    };

    const onPointerLeave = () => {
      tooltipVisible = false;
    };

    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);

    const ro = new ResizeObserver(() => {
      const w = Math.floor(host.clientWidth);
      const h = Math.floor(host.clientHeight);
      if (!w || !h) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(host);

    let isVisible = true;
    const io = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(host);

    // Vô hiệu hóa tự xoay theo cuộn trang (Scrollytelling). Giữ nguyên trạng thái mặc định của mô hình.

    let raf = 0;
    let lastTime = 0;
    const fpsInterval = 1000 / 60; // Giới hạn 60 FPS

    const tick = (currentTime: number) => {
      raf = requestAnimationFrame(tick);

      // Cập nhật vị trí Tooltip bằng Lerp
      if (tooltipVisible) {
        if (currentX === -9999) {
          currentX = targetX;
          currentY = targetY;
        } else {
          currentX += (targetX - currentX) * 0.15;
          currentY += (targetY - currentY) * 0.15;
        }
        tooltip.style.opacity = "1";
        tooltip.style.transform = `translate(${currentX}px, ${currentY}px)`;
      } else {
        tooltip.style.opacity = "0";
        currentX = -9999;
      }

      // Tối ưu GPU: Dừng cập nhật khung hình nếu Thẻ Canvas bị khuất màn hình (Off-screen)
      if (!isVisible) return;

      const elapsed = currentTime - lastTime;
      if (elapsed > fpsInterval) {
        lastTime = currentTime - (elapsed % fpsInterval);

        // Buộc phải luôn update Controls vì autoRotate cần được gọi liên tục mỗi frame
        controls.update();
        renderer.render(scene, camera);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();

      root.traverse((child: any) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: any) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
      controls.dispose();
      renderer.dispose();
      host.innerHTML = "";
    };
  }, [url]);

  return (
    <div
      className={
        isFullscreen
          ? "fixed inset-0 z-[999999] bg-slate-100/90 dark:bg-black/80 backdrop-blur-xl animate-in fade-in duration-500 flex items-center justify-center transition-colors"
          : className
      }
    >
      {/* Loading State Overlay */}
      {/* Loading State Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-black/5 z-20 backdrop-blur-[2px] transition-all duration-700 ease-in-out`}
        style={{ opacity: isLoading ? 1 : 0 }}
      >
        <div className="w-8 h-8 rounded-full border-[3px] border-[var(--accent)] border-t-transparent animate-spin mb-3 shadow-[0_0_10px_rgba(var(--accent-rgb),0.4)]" />
        <span className="text-[10px] font-bold text-[var(--accent)] tracking-widest uppercase animate-pulse">Loading_3D</span>
      </div>

      <div
        ref={hostRef}
        className="w-full h-full cursor-pointer"
        onDoubleClick={() => setIsFullscreen(!isFullscreen)}
        title="Double click to expand / Nháy đúp để Phóng to"
      />

      {!isLoading && (
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/40 dark:bg-slate-900/40 hover:bg-white/60 dark:hover:bg-slate-800/80 border border-slate-300/30 dark:border-white/20 hover:border-[var(--accent)] dark:hover:border-[var(--accent)] rounded-full text-slate-800 dark:text-white backdrop-blur-md transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)] group"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize size={18} className="text-[var(--accent)]" /> : <Maximize size={18} className="text-slate-700 dark:text-white/90 group-hover:text-[var(--accent)] transition-colors" />}
        </button>
      )}
    </div>
  );
}
