import { createContext, useContext, useReducer } from "react";

const UserContext = createContext()

function reducer(state, action){
    switch(action.type){
        case "LOGIN":
            return { ...state, user: action.payload }; 
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
}

export function UserProvider({children}){
    const initialState = { user: null };
    const [state, dispatch] = useReducer(reducer, initialState); 

    // state: Giá trị hiện tại của state
    // dispatch: Function để gửi action ( yêu cầu thay đổi state )
    // reducer: Function xử lý logic cập nhập state
    // initialState: Giá trị khởi tạo ban đầu

    return (
        <UserContext.Provider value={{state, dispatch}} >
            {children}
        </UserContext.Provider >
    )
}

function Profile() {
    const {state , dispatch} = useContext(UserContext); 
    return state?.user ? (
        <div>
            <p>Tên: {state.user}</p>
            <button onClick={() => dispatch({type: "LOGOUT"})} >Đăng xuất</button>
        </div>
    ) : (
        <button onClick={() => dispatch({ type: "LOGIN", payload: "Alice" })}>
            Đăng nhập
        </button>
    )
}

export default Profile;