const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Hoàn thiện đồ họa 3D')) {
        lines[i] = 'Đồng bộ vi mô UI, hoàn thiện đồ họa 3D và vá lỗi hiển thị';
    } else if (lines[i].includes('Mở rộng kiến trúc khối giao diện UI')) {
        lines[i] = 'Mở rộng toàn diện cấu trúc giao diện UI và Engine 3D';
    } else if (lines[i].includes('Sửa lỗi nhãn phân tử Ion')) {
        lines[i] = 'Sửa lỗi trạng thái hiển thị của nhãn phân tử Ion';
    } else if (lines[i].includes('Thêm hộp thông tin tương tác')) {
        lines[i] = 'Thêm hộp thông tin chú giải tương tác cho Ion';
    } else if (lines[i].includes('Viết lại tài liệu README.md')) {
        lines[i] = 'Viết lại tài liệu README.md theo chuẩn kỹ thuật chuyên nghiệp';
    }
}
fs.writeFileSync(file, lines.join('\n'));
