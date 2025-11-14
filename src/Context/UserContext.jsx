import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

export default function UserProvider ({children}) {
    const [user, setUser] = useState(null);
    
    const login = (name) => setUser({name});
    const logout = () => setUser(null);
    
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
