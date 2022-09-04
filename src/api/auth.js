import toast from "react-hot-toast";

// export const getAuthUser = () => {
// 	const user = localStorage.getItem(3XITY_APP_AUTH_USER);
// 	return user ? JSON.parse(user) : '';
// };
// export const setAuthUser = (user) => {
// 	localStorage.setItem(3XITY_APP_AUTH_USER, JSON.stringify(user));
// };
// export const removeAuthUser = () => {
// 	localStorage.removeItem(3XITY_APP_AUTH_USER);
// };

const authApi = async (url, payload, responses) => {

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    const request = new Request(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
    })
    
    await fetch(request)
        .then((responses) => responses.json())
        .then(responses)
        .catch(err => toast.error(err.message))
};

export default authApi;