import { useState, useEffect, useRef } from "react";

export function useNavigationVisibility() {
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  
  // Dùng để đánh dấu VỊ TRÍ ĐẦU TRANG và CUỐI TRANG
  const topMarkerRef = useRef<HTMLDivElement>(null);
  const bottomMarkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isTopVisible = true;
    let isBottomVisible = false;

    // Tạo 1 Observer để theo dõi
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Nếu phần tử Head đang nằm trong màn hình -> Đang ở Đầu trang
          if (entry.target === topMarkerRef.current) {
            isTopVisible = entry.isIntersecting;
          }
          // Nếu phần tử Footer đang nằm sát màn hình -> Đang ở Cuối trang
          else if (entry.target === bottomMarkerRef.current) {
            isBottomVisible = entry.isIntersecting;
          }
        });

        // Chống lỗi khi Zoom màn hình nhỏ 50% (View quá lớn quét trúng cả Đầu và Đáy cùng lúc)
        if (isTopVisible && isBottomVisible) {
          setShowTopNav(true);
          setShowBottomNav(false); // Ưu tiên giữ nút ở đầu trang, ẩn nút đáy để tránh loạn 2 thanh
        } else {
          setShowTopNav(isTopVisible);
          setShowBottomNav(isBottomVisible);
        }
      },
      {
        root: null, // theo dõi trên toàn bộ viewport
        threshold: 0, // Chỉ cần thẻ div chạm nhẹ vào màn hình là kích hoạt
        rootMargin: "100px 0px 100px 0px" // Mở rộng vùng quét lên/xuống 100px để hiện ra sớm hơn 1 nhịp
      }
    );

    if (topMarkerRef.current) observer.observe(topMarkerRef.current);
    if (bottomMarkerRef.current) observer.observe(bottomMarkerRef.current);

    return () => observer.disconnect();
  }, []);

  return { showTopNav, showBottomNav, topMarkerRef, bottomMarkerRef };
}
