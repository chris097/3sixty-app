import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from '../store/useReducer';
import { CONSTANT_TEXT } from '../constant';


export const toggleContext = createContext(initialState);

export const ToggleProvider = ({ children }) => {

    const [toggle, dispatch] = useReducer(reducer, initialState)

    const toggleCreateNote = () => {
        dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE, payload: CONSTANT_TEXT.TOGGLE_OPEN})
    };

    const toggleCloseNote = () => {
        dispatch({type: CONSTANT_TEXT.TOGGLE_TYPE, payload: CONSTANT_TEXT.TOGGLE_CLOSE})
    }

    const values = {
        open: toggle.open,
        close: toggle.close,
        toggleCloseNote,
        toggleCreateNote
    }

    return <toggleContext.Provider value={values}>{children}</toggleContext.Provider>
};

ToggleProvider.propTypes = {
    children: PropTypes.node
}