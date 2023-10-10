import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({
    user: new Object(),
    login: (pin:string) => {},
    logout: () => {},
    register: () => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<object>({})

    function login(pin: string) { // TODO: fix setUser details here
        if(pin === '1234') {
            setUser({
                displayName: 'John Doe',
            })
        }
    }
    function logout() {
        setUser({});
    }
    function register() { // TODO: implement register
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