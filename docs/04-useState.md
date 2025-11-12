# Bài 4: userState & Event Handling

## useState là gì ?
 - useState là một Hook của React cho phép lưu trữ và cập nhật trạng thái (state) trong component. 
 - Khi state thay đổi, component tự động render lại UI. 

## Cú pháp cơ bản
 ```jsx 
 import {useState} from "react"

 function Counter(){
    const [count, setCount] = useState(0); 

    const handleIncrement = () => setCount(count + 1); 
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Tăng</button>
        </div>
    ) 
 }
 ```

## Quy tắc & lưu ý
 1. useState chỉ dùng trong function component. 
 2. Khi gọi setState, React render lại component tự động. 
 3. Có thể dùng object hoặc array làm state: 
 ```jsx
 const [user, setUser] = useState({name: "Dung", age: 22}); 
 const [todos, setTodos] = useState([]); 
 ``` 

## Event Handling trong React
 - Event Handling ( xử lý sử kiện) dùng để mô tả quá trình phát hiện và phản ứng 
 lại các hành động xảy ra trong một ứng dụng hoặc trang web. 
 - React dùng camelCase cho sự kiện, ví dụ: onClick, onChange, onSubmit.
 - Event hander là hàm JavaScript, không phải string. 
 ```jsx
 <button onClick={handleClick}>Click me</button>
 <input type="text" onChange={handleChange}/>
 ```
