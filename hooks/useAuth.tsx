import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({ //TODO: finalize what operations the context will have
    user: new Object(),
    login: (pin:string) => {},
    logout: () => {},
    register: () => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<object>({})

    function login(pin: string) { // TODO: finalize what details the user will have here
        if(pin === '1234') {
            setUser({
                displayName: 'Sample Name',
            })
        }
    }
    function logout() {
        setUser({});
    }
    function register() { // TODO: implement register functionality
        setUser({});
    }

    return (
        <AuthContext.Provider
            value={{ 
                user: user,
                login:login,
                logout:logout,
                register:register
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}