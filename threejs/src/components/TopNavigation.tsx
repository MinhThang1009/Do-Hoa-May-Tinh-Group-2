import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Component điều hướng nằm ở đầu trang (hiện tại đã được thay thế bằng logic nội bộ trong từng Chapter)
export function TopNavigation() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

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
    <div className="w-full max-w-5xl mx-auto flex items-center justify-between mt-4 mb-8 px-4 sm:px-0">
      <Link
        to={backLink}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[var(--muted)] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">{backText}</span>
        <span className="sm:hidden">Trở lại</span>
      </Link>

      <Link
        to={nextLink}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#0c1425] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] border border/10 shadow-[0_4px_15px_rgba(100,210,255,0.2)] hover:shadow-[0_0_20px_rgba(100,210,255,0.5)] transition-all glow-border-hover hover:-translate-y-0.5"
      >
        <span className="hidden sm:inline">{nextText}</span>
        <span className="sm:hidden">Tiếp theo</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
