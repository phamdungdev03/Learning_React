# Bài 6: Fetch API + Data Fetching trong React

## Fetch API là gì ?
 - là một giao diện lập trình (API) của javaScript cho phép thực hiện các yêu cầu mạng HTTP (như GET, POST, PUT, DELETE) 
 đến máy chủ một cách dễ dàng. 
 - fetch() là hàm JavaScript có sẵn giúp gửi request đến server và nhận về dữ liệu
 - Kết hợp với useEffect + useState, ta sẽ:
    1. Gửi request khi component  mount
    2. Lưu dữ liệu vào state
    3. Hiển thị ra UI

## Cấu trúc cơ bản 
 ```jsx 
 function FetchExample () {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                setData(json); 
                setLoading(false); 
            })
            .catch(err => console.error(err)); 
    },[])

    if (loading) return <p>Loading ...</p>

    return(
        <ul>
            {data.slice(0, 5).map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    ); 
 }
 ```