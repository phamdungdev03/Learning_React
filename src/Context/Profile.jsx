import { useUser } from "./UserContext";

function Profile(){
    const {user, login} = useUser();

    if(!user){
        return (
            <div>
                <h3>Bạn chưa đăng nhập</h3>
                <button onClick={() => login("PhamDungDev03")}>Đăng nhập với PhamDungDev03</button>
            </div>
        )
    }; 

    return (
        <div>
            <h3>Hồ sơ cá nhân</h3>
            <p>Tên: {user.name}</p>
        </div>
    ); 
}

export default Profile;