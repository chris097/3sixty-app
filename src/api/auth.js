import toast from "react-hot-toast";
 //import { getAuthUser } from ".";

const authApi = async (url, payload, method, responses) => {

    const token = JSON.parse(localStorage.getItem("3xity_App"))
    

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
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