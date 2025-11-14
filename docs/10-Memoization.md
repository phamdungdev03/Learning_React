# Bài 10: Tối ưu hóa hiệu suất trong React (Menoization & Re-render)

## Vấn đề: Re-render không cần thiết 
 - Khi state hoặc props thay đổi, React re-render lại component. 
  -> Đôi khi, component con không thay đổi dữ liệu nhưng vẫn render lại -> tốn hiệu suất. 

 - Giải pháp: Dùng các công cụ "ghi nhớ" để tránh render lại khi không cần thiết:
    1. **React.memo** -> Ghi nhớ component -> render lại khi props đổi. 
    2. **useMemo** -> Ghi nhớ giá trị tính toán. 
    3. **useCallback** -> Ghi nhớ hàm (callback). 

## So sách
 | Tên         | Ghi nhớ gì | Khi nào nên dùng              |
 |-------------|------------|-------------------------------|
 | React.memo  | Component  | Khi props ít thay đổi         |
 | useMemo     | Giá trị    | Khi tính toán nặng            |
 | useCallback | Hàm        | Khi truyền callback xuống con |

## 1. React.memo - Ghi nhớ component
 - Mục đích: 
 Giúp component chỉ render lại khi props thay đổi. 
 