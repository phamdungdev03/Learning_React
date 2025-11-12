import { useEffect, useState } from "react";

const PortList = () => {
    const [ports, setPorts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPorts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal });
                if (!res.ok) throw new Error('Network response was not ok');

                const data = await res.json();
                setPorts(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchPorts();

        return () => {
            controller.abort();
            console.log("Cleanup: Hủy fetch khi unmount");
        }
    }, []); 

    if(loading) return <p>Loading...</p>;
    if(error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;

    const FivePorts = ports.sli

    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
            <h3>Danh sách bài viết:</h3>
            <ul>
                {ports.slice(0, 5).map((port, i) => (
                    <li key={i}>
                        {port.title} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PortList;