export const apiUrl = {
    POST: 'POST',
    REGISTER_URL: 'user/register',
    LOGIN_URL: 'user/login',
    RESET_PASSWORD_URL: 'user/reset-password',
    DASHBOARD_NOTE_URL: 'notes',
    EDIT_DASHBOARD_NOTE_URL: (id) => `note/${id}`,
    DELETE_DASHBOARD_NOTE_URL: (id) => `note/${id}`,
}