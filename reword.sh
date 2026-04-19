#!/bin/bash
MSG=$(cat)
if [[ "$MSG" == *"Hoàn thiện Graphic 3D"* ]]; then
  echo "Cập nhật: Hoàn thiện đồ họa 3D, đồng bộ UI và khắc phục lỗi ánh sáng"
elif [[ "$MSG" == *"update UI threejs pages"* ]]; then
  echo "Cập nhật: Nâng cấp tổng thể giao diện hệ thống và khối xử lý 3D"
elif [[ "$MSG" == *"Fix bug ion"* ]]; then
  echo "Vá lỗi: Khắc phục lỗi hiển thị tính chất của hạt Ion"
elif [[ "$MSG" == *"Add ion tooltip"* ]]; then
  echo "Tính năng: Thêm hộp thoại thông tin chú giải cho phần tử Ion"
else
  echo "$MSG"
fi
