const queryApi = (url) => {

     const token = JSON.parse(localStorage.getItem("3xity_App"))

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        headers,
    });

    return fetch(request)
        .then(response => response.json())
        .then(data => data)
}

export default queryApi