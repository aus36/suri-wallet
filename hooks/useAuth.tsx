import { createContext, useContext, useEffect, useState } from 'react'
// @ts-ignore
import * as Storage from "../functions/storage.ts"

type userType = { // Typescript type for the user object
    displayName: string,
    did: string,
    bio: string,
    pin: string,
    sigchain: Array<Object>
}

export const AuthContext = createContext({
    currentUser: "",
    setCurrentUser: (user:string) => {},
    login: (pin:string) => {},
    logout: () => {},
    register: (user:userType) => {},
})

// @ts-ignore
export const AuthProvider = ({ children }) => {

    useEffect(() => { // useEffect to initialize users if it doesn't exist
        async () => {
            if(await Storage.getItem("users") === null) {
                await Storage.setItem("users", []);
            }
        }
    },[]);

    const [currentUser, setCurrentUser] = useState<string>("")

    async function login(pin: string) {

        const user = await Storage.getUser(currentUser);

        console.log("userType: "+user)

        if(pin === user.pin) {
            return true;
        }
        return false;
    }

    function logout() {
        setCurrentUser("");
    }

    async function register(user:userType) { // TODO: implement register function
        const userData = {
            displayName: user.displayName,
            did: user.did,
            bio: user.bio,
            pin: user.pin,
            sigchain: user.sigchain
        }

        const users = JSON.parse(await Storage.getItem("users") || "[]");
        users.push(userData);

        console.log(users);

        Storage.setItem("users", users);
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