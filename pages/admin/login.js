import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

import LoginStyle from '../../styles/Login.module.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [usersecret, setUsersecret] = useState('');
    const {logIn, loggedIn} = useContext(AuthContext);
    const Router = useRouter();

    useEffect(() => {
        if (loggedIn) {
            Router.push('./edit')
        }
    })

    return (
        <div className={LoginStyle.login_wrapper}>
            <div className={LoginStyle.login_form}>
                <div className={LoginStyle.input}>
                    <input type="text" 
                        name="login_user" 
                        placeholder="User Name"
                        id="login_user" 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className={LoginStyle.input}>
                    <input type="password" 
                            name="login_secret" 
                            placeholder="Your Secret Goes Here"
                            id="login_secret" 
                            value={usersecret} 
                            onChange={(e) => {setUsersecret(e.target.value)}}/>
                </div>
                <div className={LoginStyle.input}>
                    <button onClick={() => {logIn({user:username, secret:usersecret})}}>Log In</button>
                </div>
            </div>
        </div>
    );
}
export default Login;