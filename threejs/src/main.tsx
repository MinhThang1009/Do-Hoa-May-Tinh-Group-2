import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Điểm khởi tạo và render toàn bộ ứng dụng React vào thẻ root của HTML
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Cung cấp Context định tuyến cho các component nằm bên trong */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

