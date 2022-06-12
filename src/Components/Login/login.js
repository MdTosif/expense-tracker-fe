import React, { useState } from 'react';
import {  loginApi } from '../../Apis/Api';
import './login.css';


function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandler(e) {
        e.preventDefault();
        let {token} = await loginApi({username,password})
        localStorage.setItem('token', token);
    }

    return (
        <div>
            <form action="" onSubmit={(e) => { submitHandler(e) }} className="login-form">
                <h1>Login</h1>
                <div className="form-input-material">
                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="username" id="username" placeholder="Username" autoComplete="off" required className="form-control-material" />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-input-material">
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password" id="password" placeholder="Password" autoComplete="off" required className="form-control-material" />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-ghost">Login</button>
            </form>
        </div>
    );
}

export default Login;