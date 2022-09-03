import { CONSTANT_TEXT } from "../../constant";

export const initialState = {
    open: CONSTANT_TEXT.TOGGLE_CLOSE,
    close: CONSTANT_TEXT.TOGGLE_OPEN,
    toggleCreateNote: () => { },
    toggleCloseNote: () => { }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case CONSTANT_TEXT.TOGGLE_TYPE:
            return { ...state, open: action.payload }
        default:
            return state;
    }
};