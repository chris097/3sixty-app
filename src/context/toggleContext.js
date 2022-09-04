import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from '../store/useReducer';
import { CONSTANT_TEXT } from '../helpers/constant';


export const toggleContext = createContext(initialState);

export const ToggleProvider = ({ children }) => {

    const [toggle, dispatch] = useReducer(reducer, initialState)

    const toggleCreateNote = () => dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE_CREATE_NOTE, payload: CONSTANT_TEXT.TOGGLE_OPEN})
    const toggleEditNote = () => dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE_EDIT_NOTE, payload: CONSTANT_TEXT.TOGGLE_OPEN});
    const toggleDeleteNote = () => dispatch({ type: CONSTANT_TEXT.TOGGLE_TYPE_DELETE_NOTE, payload: CONSTANT_TEXT.TOGGLE_OPEN });
    const toggleCloseNote = () => {
        dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE_CREATE_NOTE, payload: CONSTANT_TEXT.TOGGLE_CLOSE})
        dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE_EDIT_NOTE, payload: CONSTANT_TEXT.TOGGLE_CLOSE})
        dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE_DELETE_NOTE, payload: CONSTANT_TEXT.TOGGLE_CLOSE})
    }

    const values = {
        create: toggle.create,
        edit: toggle.edit,
        delete: toggle.delete,
        toggleCloseNote,
        toggleCreateNote,
        toggleEditNote,
        toggleDeleteNote,
    }

    return <toggleContext.Provider value={values}>{children}</toggleContext.Provider>
};

ToggleProvider.propTypes = {
    children: PropTypes.node
}

// import { GORATE_APP_AUTH_USER } from 'helpers/constants';

// export const getAuthUser = () => {
// 	const user = localStorage.getItem(GORATE_APP_AUTH_USER);
// 	return user ? JSON.parse(user) : '';
// };
// export const setAuthUser = (user) => {
// 	localStorage.setItem(GORATE_APP_AUTH_USER, JSON.stringify(user));
// };
// export const removeAuthUser = () => {
// 	localStorage.removeItem(GORATE_APP_AUTH_USER);
// };