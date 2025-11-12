const UserCard = ({name, age, role,onSendMessage}) => {
    const handleClick = () => {
        const message = `Xin chào từ ${name}!`;
        onSendMessage(message); 
    }   

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
            <h2>{name}</h2>
            <p>Tuổi: {age}</p>
            <p>Vai trò: {role}</p>

            <button onClick={handleClick}>Gửi tin nhắn lên parent</button>
        </div>
    )
}

export default UserCard;