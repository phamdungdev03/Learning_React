# Bài 9: Reducer ( Quản lý state nâng cao trong React )

## useReducer là gì ? 
 - useReducer là hook giúp quản lý state phức tạp bằng cách tách logic cập nhật state ra khỏi component. 
 - Nó là phiên bản nâng cao của useState, thường dùng khi: 
  - Có nhiều hành động (actions) ảnh hưởng đến state. 
  - State là object hoặc array phức tạp. 
  - Muốn logic dễ test và dễ mở rông. 

## Cú pháp
 ```jsx 
 const [state, dispatch] = useReducer(reducer, initialState)
 ```
 - reducer(state, dispatch) -> hàm mô tả cách state thay đổi.
 - dispatch({ type, payload }) -> gửi hành động để cập nhật state. 
 - initialState -> giá trị khởi tạo ban đầu. 
  
## Ví dụ cơ bản 
 ```jsx
 function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    default: return state;
  }
 }
 ```
 



