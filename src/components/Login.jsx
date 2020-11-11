import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import AmazonLogo from "../images/amazon_black_logo.png";
import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={AmazonLogo} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />

                    <button
                        className="login__signInButton "
                        onClick={signIn}
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon FAKE CLONE NOT THE REAL
                    THING Conditions of Use & Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads
                    Notice.
                </p>
                <button className="login__registerButton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
