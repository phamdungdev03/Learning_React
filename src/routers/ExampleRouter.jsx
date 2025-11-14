import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function ExampleRouter() {
    return (
        <BrowserRouter>
            <div style={{padding: "10px"}}>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link> | {" "}
                </nav>

                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default ExampleRouter;