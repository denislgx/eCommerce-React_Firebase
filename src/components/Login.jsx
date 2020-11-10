import React from "react";
import { Link } from "react-router-dom";

import AmazonLogo from "../images/amazon_black_logo.png";
import "../styles/Login.css";

const Login = () => {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={AmazonLogo} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signInButton ">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon FAKE CLONE NOT THE REAL
                    THING Conditions of Use & Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads
                    Notice.
                </p>
                <button className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
