import { useState } from 'react';
import UserCard from './UserCard';
import InputMessage from './InputMessage';


function ListUser() {
  const [messages, setMessages] = useState([]); 

  const handleMessageFromChild = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  return (
    <>
      <h1>Danh sách người dùng :</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        <UserCard name="Alice" age={25} role="Frontend Dev" onSendMessage={handleMessageFromChild} />
        <UserCard name="Bob" age={30} role="Backend Dev" onSendMessage={handleMessageFromChild} />
        <UserCard name="Charlie" age={22} role="UI/UX Designer" onSendMessage={handleMessageFromChild} />
      </div>

      <h2>Nhập message trực tiếp: </h2>
      <InputMessage onSend={handleMessageFromChild} />

      <h2>Tin nhắn nhận được từ các UserCard:</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>

    </>
  )
}

export default ListUser;
