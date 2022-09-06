/* eslint-disable no-undef */
import React, { createContext } from "react";
import PropTypes from 'prop-types';
import authApi from "../api/auth";
import { apiUrl } from "../api/url";

const { REACT_APP_BACKEND_URL } = process.env;

export const authContext = createContext({
    // isLoggedIn: false,
    logout: () => { },
    login: () => { },
    register: () => { },
    resetPassword: () => {},
})

export const AuthProvider = ({ children }) => {
    // const [loggedIn, setLoggedIn] = useState(false);

    const login = (payload, responses) => {
        const loginUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.LOGIN_URL}`;
        return authApi(loginUrl, payload, apiUrl.POST, responses)
    };

    const register = (payload, responses) => {
        const registerUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.REGISTER_URL}`;
        return authApi(registerUrl, payload, apiUrl.POST, responses)
    }

    const resetPassword = (payload, responses) => {
        const resetPasswordUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.RESET_PASSWORD_URL}`;
        return authApi(resetPasswordUrl, payload, apiUrl.POST, responses)
    }

    const logout = () => {
        console.log('LOGGED OUT')
    };

    const values = {
        // loggedIn: loggedIn,
        logout,
        login,
        register,
        resetPassword
    }

    return <authContext.Provider value={values}>{children}</authContext.Provider>
};


AuthProvider.propTypes = {
    children: PropTypes.node
}

