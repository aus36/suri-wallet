import { createContext, useContext, useState } from 'react'
// @ts-ignore
import * as Storage from "../functions/storage.ts"

export const AuthContext = createContext({ //TODO: finalize what operations the context will have
    currentUser: "",
    login: (pin:string, displayName: string) => {},
    logout: () => {},
    register: (displayName:string, did:string, bio:string, pin:string, sigchain:[]) => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<string>("")

    async function login(pin: string, displayName: string) {
        if(pin === '1234') {
            setCurrentUser("Display Name");
        }

        // TODO: uncomment this code when storage is finished, this should work for login

        // const user = await Storage.getItem(displayName);

        // if(pin === user.pin) {
        //     return true;
        // }
        // else {
        //     return false
        // }
    }
    function logout() {
        setCurrentUser("");
    }
    async function register(displayName:string, did:string, bio:string, pin:string, sigchain:[]) { // TODO: implement register function
        Storage.setItem();
    }

    return (
        <AuthContext.Provider
            value={{ 
                currentUser: currentUser,
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