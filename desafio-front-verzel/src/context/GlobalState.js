import React, { useState } from "react";
import {  login } from "../services/services";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [module, setModule] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || [])
    const [classe, setClasse] = useState([])

    const requestLogin = (body, navigate) => {
        login(body, navigate, setUser)
    }

    const states = { user, module, classe }
    const setters = { setUser, setModule, setClasse }
    const requests = { requestLogin }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState