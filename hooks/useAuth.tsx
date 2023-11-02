import { createContext, useContext, useEffect, useState } from 'react'
// @ts-ignore
import * as Storage from "../functions/storage.ts"

export const AuthContext = createContext({
    currentUser: "",
    setCurrentUser: (user:string) => {},
    login: (pin:string) => {},
    logout: () => {},
    register: (displayName:string, did:string, bio:string, pin:string, sigchain:[]) => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {

    useEffect(() => { // useEffect to initialize users if it doesn't exista
        async () => {
            if(await Storage.getItem("users") === null) {
                await Storage.setItem("users", []);
            }
        }
    },[]);

    const [currentUser, setCurrentUser] = useState<string>("")

    async function login(pin: string) {
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
        const user = {
            displayName: displayName,
            did: did,
            bio: bio,
            pin: pin,
            sigchain: sigchain
        }

        Storage.setItem("users", user);
    }

    return (
        <AuthContext.Provider
            value={{ 
                currentUser: currentUser,
                setCurrentUser: setCurrentUser,
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