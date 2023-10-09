import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({
    user: {},
    login: (pin:string) => {},
    logout: () => {},
    register: () => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<object>({})

    function login(pin: string) {
        if(pin === '1234') {
            setUser({
                pin: pin,
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