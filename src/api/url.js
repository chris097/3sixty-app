export const apiUrl = {
    REGISTER_URL: 'user/register',
    LOGIN_URL: 'user/login',
    DASHBOARD_NOTE_URL: 'notes',
    EDIT_DASHBOARD_NOTE_URL: (id) => `note/${id}`,
    DELETE_DASHBOARD_NOTE_URL: (id) => `note/${id}`,
}