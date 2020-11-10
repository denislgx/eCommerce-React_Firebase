import React, { createContext, useContext, useReducer } from "react";

// Selector

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, product) => product.price + amount, 0);

// Creates the Data Layer

export const StateContext = createContext();

// This is going to wrap the whole App and provide the Data Layer

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the Data Layer

export const useStateValue = () => useContext(StateContext);
