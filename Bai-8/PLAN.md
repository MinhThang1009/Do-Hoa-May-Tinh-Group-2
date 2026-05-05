Redesign giao diện - Bài 8

─────────────────────────────────────────
1. TRANG 1 — Phần 1: Khái niệm Acid
─────────────────────────────────────────
Yêu cầu chung: giữ nguyên layout và design.
Chi tiết kỹ thuật:
- Giữ nguyên các box biểu diễn mô hình 3D.
- Sử dụng file .glb trong folder blend/File glb phân tử/ (đã copy vào public/models/).
- Bố cục: mô hình 3D một bên, tên acid/thông tin bên cạnh.
- Danh sách acid theo Bảng 8.1 trong context.md: HCl, HNO₃, H₂SO₄.
- Chuẩn hóa tên tiếng Việt: "Acid Clohidric", "Acid Nitric", "Acid Sulfuric"
  (thay "Axit ..." → "Acid ..." cho đồng nhất với context.md và Trang 3).

─────────────────────────────────────────
2. TRANG 2 — Phần 2: Tính chất hóa học
─────────────────────────────────────────
Yêu cầu chung:
- Chỉ giữ 2 phản ứng có trong context.md. Xóa: trung hòa, oxide base, acid + muối.
- Subtitle trang phản ánh đúng context.md:
  "Acid thường tan được trong nước. Dung dịch acid làm đổi màu quỳ tím và
   phản ứng với kim loại (Mg, Zn,...) để tạo thành muối và giải phóng khí hydrogen."
- Thêm video minh họa bên dưới mỗi phản ứng, xếp dọc.

Quy chuẩn box video:
- aspect-ratio: 16/9
- width: 80%, max-width: 800px, margin: auto
- border-radius đồng bộ với card, box-shadow nhẹ
- Label: text nhỏ bên dưới video

Phản ứng 1 — HCl + quỳ tím:
- 1 video box lab, đặt ngay dưới visual quỳ tím đổi màu.
- File: blend/Phòng thí nghiệm/0_HCl_quytim.mp4
- Label: "Phòng thí nghiệm ảo"

Phản ứng 2 — Acid + kim loại (Mg, Zn, Fe):
- Phương trình theo context.md:
    Mg + H₂SO₄ → MgSO₄ + H₂↑
    Zn + 2HCl → ZnCl₂ + H₂↑
    Fe + 2HCl → FeCl₂ + H₂↑
- 2 video box xếp dọc, gap 16–24px:
    Box 1 — file: blend/Phòng thí nghiệm/thi-nghiem-4.mp4 — label: "Phòng thí nghiệm ảo"
    Box 2 — file: blend/Phản ứng phân tử/1_phantu.mp4     — label: "Phản ứng phân tử"

─────────────────────────────────────────
3. TRANG 3 — Phần 3: Các Acid thông dụng
─────────────────────────────────────────
Yêu cầu chung:
- Danh sách acid theo context.md Phần III: H₂SO₄ → HCl → CH₃COOH (không dùng HNO₃).
- Không có box mô hình 3D (context.md Phần III không đề cập cấu tạo phân tử).
- Layout: header full-width (tên acid + mô tả + cảnh báo nếu có) + grid 2 cột (Tính chất | Ứng dụng).
- Bảng so sánh cuối trang cập nhật cho 3 acid mới.

Nội dung từng acid (chỉ dùng thông tin có trong context.md):

H₂SO₄:
  Mô tả: "Là chất lỏng không màu, không bay hơi, sánh như dầu, nặng gần gấp hai lần nước.
           Tan vô hạn trong nước và toả nhiều nhiệt."
  Cảnh báo inline: "Không được tự ý pha loãng dung dịch sulfuric acid đặc."
  Tính chất (4): Chất lỏng không màu + không bay hơi / Sánh như dầu, nặng gấp đôi nước /
                 Tan vô hạn trong nước, toả nhiệt / Hoá chất tiêu thụ nhiều nhất thế giới.
  Ứng dụng (6): Sản xuất phẩm nhuộm / Sản xuất giấy, tơ sợi / Sản xuất sơn /
                 Sản xuất chất dẻo / Sản xuất chất tẩy rửa / Sản xuất phân bón.

HCl:
  Mô tả: "Dung dịch hydrochloric acid (HCl) là chất lỏng không màu. Hydrochloric acid được
           sử dụng nhiều trong các ngành công nghiệp và đóng vai trò quan trọng trong tiêu hoá."
  Cảnh báo inline: "⚠️ Nếu nồng độ acid trong dạ dày không phù hợp sẽ ảnh hưởng đến
                    chức năng tiêu hoá và sức khoẻ." (từ context.md, dòng cuối phần HCl)
  Tính chất (4): Dung dịch không màu, dùng nhiều trong công nghiệp /
                 Thúc đẩy quá trình tiêu hoá thức ăn /
                 Kích thích ruột non và tuyến tụy sản xuất enzyme tiêu hoá /
                 Phân giải chất béo, protein và tiêu diệt vi khuẩn có hại.
  Ứng dụng (3): Tẩy gỉ thép / Tổng hợp chất hữu cơ / Xử lí pH nước bể bơi.

CH₃COOH:
  Mô tả: "Acetic acid là chất lỏng không màu, có vị chua. Trong giấm ăn có chứa acetic acid
           với nồng độ 2–5%."
  Tính chất (3): Chất lỏng không màu, vị chua đặc trưng /
                 Trong giấm ăn chứa 2–5% acetic acid /
                 Phản ứng với cặn đá vôi (CaCO₃), dùng làm sạch dụng cụ đun nước.
  Ứng dụng (4): Chế biến thực phẩm (giấm ăn) / Sản xuất sợi poly (vinyl acetate) /
                 Sản xuất sơn / Sản xuất dược phẩm.

─────────────────────────────────────────
4. TRANG CHỦ — Home
─────────────────────────────────────────
Badge 3 icon:
- Sửa từ: "✨ Interactive Design" | "⚛ Tương tác" | "🧪 Thí nghiệm ảo"
- Thành: "✨ Thiết kế tương tác" | "⚛ Mô hình phân tử 3D" | "🧪 Thí nghiệm ảo"
- Lý do: tiếng Anh lẫn tiếng Việt; "Interactive Design" và "Tương tác" trùng nghĩa.

Mô tả card Phần 1:
- Sửa: "Tìm hiểu định nghĩa, phân loại và cấu tạo phân tử của các Acid thông dụng."
- Thành: "Tìm hiểu khái niệm acid, gốc acid và nhận biết qua công thức hoá học của HCl, HNO₃, H₂SO₄."
- Lý do: context.md Phần I không đề cập "phân loại"; nội dung thực tế là khái niệm + gốc acid.

Mô tả card Phần 3:
- Sửa: "Tìm hiểu chi tiết về H₂SO₄, HCl và CH₃COOH — tính chất và ứng dụng thực tế trong đời sống."
- Thành: "Tìm hiểu tính chất và ứng dụng thực tế của H₂SO₄, HCl và CH₃COOH trong đời sống và công nghiệp."
- Lý do: đồng bộ phong cách với card Phần 1 và Phần 2 (không dùng dấu —).

─────────────────────────────────────────
5. SPLASH SCREEN — Màn hình loading
─────────────────────────────────────────
Sửa 3 dòng boot log:
- Dòng 1: "[SYS] Kernel Booting..."          → "[SYS] Khởi động hệ thống..."
- Dòng 4: "[PHX] Tính toán thuật toán Không gian..." → "[PHX] Khởi tạo hiệu ứng hóa học..."
- Dòng 5: "...Mở khóa Phòng Lab."            → "...Mở khóa Phòng Thí Nghiệm."
Dòng 2 "[GL] Khởi tạo WebGL Renderer..." giữ nguyên (WebGL là thuật ngữ kỹ thuật).
Dòng 3 "[AST] Đang nạp mô hình phân tử 3D..." giữ nguyên — đúng.

─────────────────────────────────────────
6. CHUẨN HÓA TÊN — Áp dụng toàn bộ
─────────────────────────────────────────
Dùng "Acid" thay "Axit" (context.md dùng "acid", sách giáo khoa hiện hành).
Chapter1.tsx cần sửa:
  "Axit Clohidric" → "Acid Clohidric"
  "Axit Nitric"    → "Acid Nitric"
  "Axit Sulfuric"  → "Acid Sulfuric"
Chapter3.tsx đã đúng: "Acid Clohidric", "Acid Acetic", "Acid Sulfuric". ✓
