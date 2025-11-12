# Bài 3: Props 

## 1. Props là gì ? 
 - Props (Properties) là cách truyền dữ liệu từ component cha xuống component con trong React. 
 - Nó giống như tham số của hàm: component cha cung cấp dữ liệu -> component con nhận và hiển thị. 

## Cú pháp cơ bản
 ```jsx
 function Greenting(porps) {
    return <h1>Hello, {porps.name}</h1>
 }
 
 function App(){
    return <Greenting name="Dũng"/>
 }
 ```

## 2. Quy tắc Props
 1. Chỉ đọc (read-only) -> component con không thể thay đổi trực tiếp. 
 2. Truyềm được mọi lại dữ liệu: string, number, boolean, array, object, function. 
 3. Có thể dùng destructuring để viết gọn: 
 ```jsx
 function Greenting({name, age}){
    return <h1>{name} - {age}</h1>
 } 
 ```

## 3. Truyền data từ con lên cha 
 - Props mặc định truyền cha -> con, nhưng nếu muốn con gửi dữ liệu lên cha, ta dùng callback function. 
 - Cha gửi 1 hàm xuống con -> con gọi hàm đó với dữ liệu -> cha nhận dữ liệu và xử lý (thường cập nhật state).

## Ví dụ: 
 ```jsx
 function Parent(){
    const handleData = (dataFromChild) => console.log(dataFromChild); 
    return <Child sendData={handleData}>
 }; 

 function Child({sendData}) {
    const data = "Hello from child"
    return <button onClick={() => sendData(data)}>Gửi dữ liệu lên cha</button>
 }
 ```


