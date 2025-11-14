# Bài 8: useContext & Context API 

## useContext 
 - Cho phép truy cập dữ liệu toàn cục mà không cần props.
 - Tránh "prop drilling" giữ nhiều component. 

## Cấu trúc 
 1. `createContext()` -> Tạo vùng dữ liệu 
 2. `Provider` -> Cung cấp dữ liệu 
 3. `useContext` -> Tiêu thụ dữ liệu trong component 

## Ví dụ 
 ```jsx
 const ThemeContext = createContext(); 

 function App(){
    return(
        <ThemeContext.Provider value = {{ theme: 'dark' }}>
            <Child />
        </ThemeContext.Provider>
    )
 }

 function Child(){
    const { theme } = useContext(ThemeContext)
    return <p>{theme}</p>
 }
 ```