import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
