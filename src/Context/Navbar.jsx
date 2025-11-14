import { useUser } from "./UserContext";

const Navbar = () => {
    const {user, logout} = useUser();

    return (
        <nav style={{display: "flex", background: "#a59b9bff", color: "#fff", padding: "10px" }}>
            <h1>My Application</h1>
            {user && (
                <span style={{float: "right"}}>
                    Xin chào, {user.name}! {" "}
                    <button onClick={logout} style={{ marginLeft: "10px"}}> Đăng xuất </button>
                </span>
            )}
        </nav>
    ); 
}

export default Navbar;