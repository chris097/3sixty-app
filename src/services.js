/* eslint-disable no-undef */

import authApi from "./api/auth";
import queryApi from "./api/queryApi";
import { apiUrl } from "./api/url";

/* eslint-disable no-unused-vars */
const { REACT_APP_BACKEND_URL } = process.env;

export const fetchDashboardNotes = () => {
    const noteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DASHBOARD_NOTE_URL}`;
    return queryApi(noteUrl);
};
export const createNewNote = (payload, responses) => {
    const createNoteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DASHBOARD_NOTE_URL}`;
    return authApi(createNoteUrl, payload, 'POST', responses)
};
export const editNote = (payload, id, responses) => {
    const editNoteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.EDIT_DASHBOARD_NOTE_URL(id)}`;
    return authApi(editNoteUrl, payload, 'PUT', responses)
};
export const deleteNote = (id, responses) => {
    const deleteNoteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DELETE_DASHBOARD_NOTE_URL(id)}`;
    return authApi(deleteNoteUrl, {}, 'DELETE', responses)
};