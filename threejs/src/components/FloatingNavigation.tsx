import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Component thẻ điều hướng trôi nổi dưới đáy màn hình (hiện tại đã được gộp logic vào từng page)
export function FloatingNavigation() {
  const { pathname } = useLocation();
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Khi kéo xuống được một đoạn (ví dụ 300px) thì hiện nút dưới đáy
      const scrolled = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      // Nếu kéo hết cỡ chạm đáy thì chuyển nút xuống dưới
      if (scrolled + windowHeight >= documentHeight - 50) {
        setShowBottomNav(true);
      } else {
        setShowBottomNav(scrolled > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Không hiển thị ở trang chủ
  if (pathname === "/") return null;

  // Xác định nút Back / Next dựa theo Route hiện tại
  let backLink = "";
  let backText = "";
  let nextLink = "";
  let nextText = "";

  if (pathname === "/phan-1") {
    backLink = "/";
    backText = "Trang chủ";
    nextLink = "/phan-2";
    nextText = "Tính chất của Acid";
  } else if (pathname === "/phan-2") {
    backLink = "/phan-1";
    backText = "Khái niệm Acid";
    nextLink = "/phan-3";
    nextText = "Một số Acid thông dụng";
  } else if (pathname === "/phan-3") {
    backLink = "/phan-2";
    backText = "Tính chất hóa học";
    nextLink = "/";
    nextText = "Về Trang Chủ";
  }

  return (
    <>
      {/* Nút nằm tĩnh ở CÙNG BÊN TRONG CỦA MỖI TRANG (đã có trong source code các page) */}
      
      {/* Khối Nút Nổi Nằm Ở DƯỚI ĐÁY MÀN HÌNH (Sticky Bottom) - Chỉ hiện khi kéo xuống */}
      <div 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 transition-all duration-500 ease-in-out ${
          showBottomNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        <div className="flex items-center p-2 rounded-2xl bg-[#0c1425]/90 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Link
            to={backLink}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[var(--muted)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{backText}</span>
            <span className="sm:hidden">Trở lại</span>
          </Link>
          
          <div className="w-[1px] h-6 bg-[rgba(255,255,255,0.1)] mx-2" />
          
          <Link
            to={nextLink}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#0c1425] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] hover:shadow-[0_0_15px_rgba(100,210,255,0.4)] transition-all"
          >
            <span className="hidden sm:inline">{nextText}</span>
            <span className="sm:hidden">Tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
