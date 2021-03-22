import { createContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const logIn = ({user, secret}) => {
        if (!user) {
            throw "Username not correct";
        }
        if (!secret) {
            throw "Password is not correct";
        }
        if (user === 'arun-arjun' && secret === 'Arun@051095') {
            setLoggedIn(true);
        }
    }
    return (
        <AuthContext.Provider value={{user, loggedIn, logIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext