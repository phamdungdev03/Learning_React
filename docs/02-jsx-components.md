# Bài 2: JSX & Component

## 1. 💡 JSX là gì ? 
 - JSX là cú pháp mở rộng của javascript, cho phép viết HTML trong JS. 
 - Dễ đọc, dễ viết, mô tả UI trực quan. 

## Quy tắc JSX: 
 1. Chỉ có 1 thẻ cha ngoài cùng. 
 2. Dùng `classname` thay vì `class`. 
 3. JavaScript được đặt trong `{}`. 
 4. Tag phải đóng đầy đủ.  

## Ví dụ: 
 ```jsx
 function Welcome() {
    const name = "Phạm Văn Dũng"
    return (
        <div>
            <h1>Xin chào {name}</h1>
        </div>
    )
 } 
 ```

## 2. 📚 Component là gì ? 
 - Component là một khối giao diện độc lập trong React. 
 - Là một hàm JavaScript trả về JSX. 
 - Có thể tái sử dụng nhiều lần. 

## Sử dụng: 
 ``` 
 import Welcome from "./components/Welcome";

 function App(){
    return <Welcome />
 }
 ```
