import { useState } from "react";
import ListUser from "./components/ListUser"
import LifecycleDemo from "./components/LifecycleDemo";
import PortList from "./components/FetchDemo";

function App() {

  const [show, setShow] = useState(true);

  return (
    <>
      <ListUser />

      <h1>React Lifecycle Demo</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn component" : "Hiện component"}
      </button>
      {show && <LifecycleDemo />}

       <div style={{ padding: "20px" }}>
        <h1>React Fetch API Demo</h1>
        <PortList />
      </div>
    </>
  )
}

export default App
