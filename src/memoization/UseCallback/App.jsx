import { useCallback, useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const increment = useCallback(() => setCount((count) => count + 1), []);
  const toggleTheme = useCallback(
    () => setTheme((theme) => (theme === "light" ? "dark" : "light")),
    []
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>⚡ useCallback Demo</h2>
      <p>Count: {count}</p>
      <Button onClick={increment}>Tăng</Button>
      <Button onClick={toggleTheme}>Đổi theme</Button>
      <p>Theme: {theme}</p>
    </div>
  );
}

export default App;
