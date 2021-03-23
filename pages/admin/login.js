import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

import LoginStyle from '../../styles/Login.module.css'

const Login = () => {
    const [usersecret, setUsersecret] = useState('');
    const {logIn, loggedIn, generateToken} = useContext(AuthContext);
    const Router = useRouter();

    useEffect(() => {
        if (loggedIn) {
            Router.push('./edit')
        }
    }, [loggedIn])

    useEffect(() => {
        generateToken();
    }, []);

    return (
        <div className={LoginStyle.login_wrapper}>
            <div className={LoginStyle.login_form}>
                <div className={LoginStyle.input}>
                    <input type="password" 
                            name="login_secret" 
                            placeholder="Your Secret OTP Goes Here"
                            id="login_secret" 
                            value={usersecret} 
                            onChange={(e) => {setUsersecret(e.target.value)}}/>
                </div>
                <div className={LoginStyle.input}>
                    <button onClick={() => { logIn({secret: usersecret})}}>Log In</button>
                </div>
            </div>
        </div>
    );
}
export default Login;