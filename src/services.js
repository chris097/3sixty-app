/* eslint-disable no-undef */

import queryApi from "./api/queryApi";
import { apiUrl } from "./api/url";

/* eslint-disable no-unused-vars */
const { REACT_APP_BACKEND_URL } = process.env;

export const fetchDashboardNotes = () => {
    const noteUrl = `${REACT_APP_BACKEND_URL}/${apiUrl.DASHBOARD_NOTE_URL}`;
    return queryApi(noteUrl);
}