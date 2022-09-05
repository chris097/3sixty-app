import toast from "react-hot-toast";
import { getAuthUser } from ".";

const authApi = async (url, payload, method, responses) => {

    const authUserData = getAuthUser();
    const token = authUserData ? authUserData.token : '';

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `bearer ${token}`,
    });

    const request = new Request(url, {
        method: method,
        headers,
        body: JSON.stringify(payload),
    })
    
    await fetch(request)
        .then((responses) => responses.json())
        .then(responses)
        .catch(err => toast.error(err.message))
};

export default authApi;