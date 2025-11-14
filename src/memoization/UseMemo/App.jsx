import { useMemo, useState } from "react"

const ExpensionCallculattion = ({num}) => {
    const  result = useMemo(() => {
        console.log("Tính toán nặng !");

        let total = 0; 
        for(let i = 0; i < 1000000000; i++) total += i;
        return total + num;
    }, [num]);

    return <p>Kết quả: {result}</p>
}

const App = () => {
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensionCallculattion num={num}/>
            <button onClick={() => setNum(num + 1)}>Tăng num</button>
            <button onClick={() => setCount(count + 1)}>Tăng count</button>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default App;