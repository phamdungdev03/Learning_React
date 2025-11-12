import { useEffect, useState } from "react";

const LifecycleDemo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mount lần đầu !");
        return () => console.log("Component unmount");
    }, []);

    useEffect(() => {
        if (count === 0) return;
        console.log("Component update, count = ", count);
    }, [count]); 

    return (
        <div style={{ border: "1px solid #666", padding: "10px", margin: "10px" }}>
            <div>Lifecycle Demo Component</div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Tăng Count</button>
        </div>
    )
}

export default LifecycleDemo;