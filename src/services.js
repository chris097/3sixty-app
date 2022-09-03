/* eslint-disable no-undef */

import authApi from "./api/auth";
import queryApi from "./api/queryApi";

/* eslint-disable no-unused-vars */
const { REACT_APP_BACKEND_URL } = process.env;

export const fetchDashboardNotes = () => {
    const noteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DASHBOARD_NOTE_URL}`;
    return queryApi(noteUrl);
};
export const createNewNote = (payload, responses) => {
    const createNoteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DASHBOARD_NOTE_URL}`;
    return authApi(createNoteUrl, payload, responses)
};