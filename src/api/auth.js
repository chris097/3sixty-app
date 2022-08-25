
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
        .catch(err => console.log(err.message))
};

export default authApi;