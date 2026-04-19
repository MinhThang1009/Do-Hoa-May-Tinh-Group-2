const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, 'utf8');

const replacements = {
    'update UI threejs pages and components': 'Cập nhật: Mở rộng kiến trúc khối giao diện UI và Engine 3D',
    'Hoàn thiện Graphic 3D, Layout Sync & Anti Washed-out UI': 'Cập nhật: Hoàn thiện đồ họa 3D, đồng bộ vi mô UI và vá lỗi hiển thị',
    'Fix bug ion': 'Vá lỗi: Sửa lỗi nhãn phân tử Ion',
    'Add ion tooltip': 'Tính năng: Thêm thông tin chú giải Tooltip cho khối Ion'
};

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('pick')) {
        lines[i] = lines[i].replace(/^pick/, 'reword');
    }
}
fs.writeFileSync(file, lines.join('\n'));
