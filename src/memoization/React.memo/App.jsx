import { useState } from "react";
import Child from "./Child";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Child name="PhamDungDev03"/>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    )
}

export default App;