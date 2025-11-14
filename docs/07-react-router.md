# Bài 7: React Router DOM 

## React Router là gì ? 
 - Là thư viện giúp React có thể điều hướng nhiều trang ( SPA - Single Page Application )
 - Thực tế, app chỉ có 1 file index.html, nhưng React Router giúp ta chuyển giữa các "trang ảo" mà không reload trình duyệt. 
 - Mỗi "trang" là 1 component khác nhau. 

## Cài đặt 
 ```bash
 npm install react-router-dom
 ``` 

## Cấu trúc cơ bản của Router 
 ```jsx
 function App(){
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Trang chủ</Link> | <Link to="/about">Giới thiệu</Link>
            </nav>

            <Routers>
                <Router path="/" element={<Home />}>
                <Router path="/about" element={<About />}>
            </Routers>
        </BrowserRouter>
    )
 }
 ```
 ## Giải thích: 
  - <BrowserRouter>: Bọc toàn bộ app, quản lý lịch sử đường dẫn. 
  - <Routers>: Chứa tất cả các "đường dẫn" trong app. 
  - <Router>: Xác định đường dẫn (path) và component (element) tương ứng. 
  - <Link>: Tạo link điều hướng, không reload trang. 