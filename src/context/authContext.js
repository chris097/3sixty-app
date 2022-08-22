/* eslint-disable no-undef */
import React, { createContext } from "react";
import PropTypes from 'prop-types';
import authApi from "../api/auth";

const { REACT_APP_BACKEND_URL} = process.env;

export const authContext = createContext({
    // isLoggedIn: false,
    logout: () => { },
    login: () => { },
    register: () => {}
})

export const AuthProvider = ({ children }) => {
    // const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        console.log('Logged in...')
    };

    const register = (payload) => {
        const registerUrl = `${REACT_APP_BACKEND_URL}/user/register`;
        return authApi(registerUrl, payload)
    }

    const logout = () => {
        console.log('LOGGED OUT')
    };

    const values = {
        // loggedIn: loggedIn,
        logout,
        login,
        register
    }

    return <authContext.Provider value={values}>{children}</authContext.Provider>
};


AuthProvider.propTypes = {
    children: PropTypes.node
}

