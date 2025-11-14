import Navbar from "./Navbar";
import Profile from "./Profile";
import UserProvider from "./UserContext";

function AppContext(){
    return (
        <UserProvider>
            <Navbar />
            <div style={{ padding: "20px" }}>
                <Profile />
            </div>
        </UserProvider>
    )
}

export default AppContext;  