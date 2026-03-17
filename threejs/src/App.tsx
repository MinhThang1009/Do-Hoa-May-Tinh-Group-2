import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chapter1 } from "./pages/Chapter1";
import { Chapter2 } from "./pages/Chapter2";
import { Chapter3 } from "./pages/Chapter3";
import { ChemistryBackground } from "./components/ChemistryBackground";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      {/* Hiệu ứng nền bọt khí và ký hiệu hóa học trôi nổi */}
      <ChemistryBackground />
      {/* Nội dung chính nằm trên nền animation */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phan-1" element={<Chapter1 />} />
          <Route path="/phan-2" element={<Chapter2 />} />
          <Route path="/phan-3" element={<Chapter3 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}


