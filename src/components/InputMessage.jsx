import { useState } from "react";

const InputMessage = ({onSend}) => {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onSend(text);
        setText('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Nhập message ..."
            />
            <button>Gửi</button>
        </form>

    )
}

export default InputMessage;