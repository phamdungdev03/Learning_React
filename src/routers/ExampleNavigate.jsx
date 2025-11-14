
import { useNavigate } from "react-router-dom";

export default function ExampleNavigate() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // logic login...
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
}
