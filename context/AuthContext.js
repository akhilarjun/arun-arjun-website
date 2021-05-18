import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AuthContext = createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    let clearTimer = null;

    const logIn = ({secret}) => {
        if (!secret) {
            throw "Password is not correct";
        }
        if (secret === atob(token)) {
            toast.success('Logged in successfully. Please wait while we redirect you to admin panel!', {
                duration: 4000
            })
            setLoggedIn(true);
        }
    }
    useEffect(() => {
        if (token) {
            clearTimer = setTimeout(() => {
                setToken(null);
            }, 1000 * 60 * 10);
        }
    }, [token]);
    const generateToken = async () => {
        if (clearTimer) {
            clearTimeout(clearTimer);
            clearTimer = null;
            setToken(null);
        }
        const response = await fetch(`https://www.arunarjun.com/api/auth-token`);
        const {token} = await response.json();
        setToken(token)
        toast.success('Token generated succesfully, and sent to arxxxxxxxx35@gmail.com', {
            duration: 4000
        });
    }
    return (
        <AuthContext.Provider value={{user, loggedIn, logIn, generateToken}}>
            {props.children}
            <Toaster position="bottom-right"/>
        </AuthContext.Provider>
    )
}

export default AuthContext
