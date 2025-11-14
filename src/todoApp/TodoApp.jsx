import { useReducer, useState } from "react";
import todoReducer, { initialState } from "./todoReducer"

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [text, setText] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        dispatch({ type: 'ADD_TODO', payload: text });
        setText("");
    }

    return (
        <>
            <div>
                <h2>Todo App</h2>
                <form onSubmit={handleAdd}>
                    <input 
                        type="text"
                        placeholder="Nhập công việc ..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick="submit">Thêm</button>
                    <button onClick={() => {dispatch({type: "CLEAR_TODO"})}}>Xóa tất cả</button>
                </form>
            </div>   

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span 
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            cursor: "pointer",
                        }}
                        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                        >{todo.text}</span>
                        <button onClick={() => dispatch({type: "DELETE_TODO", payload: todo.id})}  style={{ marginLeft: 10 }}>❌</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoApp;