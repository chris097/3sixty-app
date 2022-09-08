import { CONSTANT_TEXT } from "../helpers/constant";

export const getAuthUser = () => {
	const user = localStorage.getItem(CONSTANT_TEXT.APP_AUTH_USER);
	return JSON.parse(user);
};
export const setAuthUser = (user) => {
	localStorage.setItem(CONSTANT_TEXT.APP_AUTH_USER, JSON.stringify(user));
};
export const removeAuthUser = () => {
	localStorage.removeItem(CONSTANT_TEXT.APP_AUTH_USER);
};
