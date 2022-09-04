import { CONSTANT_TEXT } from "../../helpers/constant";

export const initialState = {
    create: CONSTANT_TEXT.TOGGLE_CLOSE,
    edit: CONSTANT_TEXT.TOGGLE_CLOSE,
    delete: CONSTANT_TEXT.TOGGLE_CLOSE,
    toggleCreateNote: () => { },
    toggleEditNote: () => { },
    toggleCloseNote: () => { },
    toggleDeleteNote: () => { }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case CONSTANT_TEXT.TOGGLE_TYPE_CREATE_NOTE:
            return { ...state, create: action.payload }
        case CONSTANT_TEXT.TOGGLE_TYPE_EDIT_NOTE:
            return { ...state, edit: action.payload }
        case CONSTANT_TEXT.TOGGLE_TYPE_DELETE_NOTE:
            return {...state, delete: action.payload}
        default:
            return state;
    }
};