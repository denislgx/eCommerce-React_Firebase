import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const promise = loadStripe(
    "pk_test_51HmhvyAS4DQZ7Ea20MGo7GBAKBEDZvqgfvpXpYNfC1HeGA0J8mU4SMvQTqiEWdUO7Vtz8Prtv2Q8GCdgkJbtFt6T00zPuYl2A7"
);

const App = () => {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User logged in / was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // User is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
