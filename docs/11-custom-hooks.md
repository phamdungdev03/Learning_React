# Bài 11 - Custom Hooks 

## Custom hook là gì ? 
 - Hàm bắt đầu bằng `use`. 
 - Dùng để tách logic ra khỏi component.  
 - Tái sử dụng logic giữa nhiều component. 
 - Custom hook có thể sử dụng các hook khác bên trong (useState, useEffect, useMemo, useCallback, useReducer…).

## Tại sao cần custom hook ? 
 - Khi componet:
    - Quá dài
    - Logic lặp lại giữa nhiều component
    - Cần chia sẻ chức năng như: 
     - Fetch API 
     - Xử lý form 
     - LocalStorage 
     - Debounce 
     - Dark mode
 - Lúc này nên trích logic ra custom hook để: 
  - Dễ tái sử dụng
  - Dễ test 
  - Code sạch 
  - Dễ mở rộng


    