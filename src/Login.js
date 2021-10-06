import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="login logo" className="login-img"/>
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
