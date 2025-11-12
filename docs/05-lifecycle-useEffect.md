# Bài 5: Lifecycle & useEffect 

## Lifecycle là gì ? 
 - Lifecycle (vòng đời) của một component là chuỗi các giai đoạn component được tạo ra, cập nhật đến khi bị hủy
 - Hiểu lifecycle giúp bạn can thiệp đúng lúc để: 
  - Khởi tạo dữ liệu từ API
  - Cập nhật DOM 
  - Dọn dẹp tài nguyên khi component bị xóa

## Lifecycle trong React Function Component
 1. **Mounting**: component render lần đầu 
  - useEffect(() => {...} , [])
 2. **Updating** component render lại so đo state/props thay đổi 
  - useEffect(() => {...}, [deps])
 3. **Unmounting** component bị remove khỏi UI 
  - return function cleanup trong useEffect 