// Get the default headers of the request
const getHeaders = () => {
    let headers = localStorage.getItem("token") ? {Authorization: "Bearer " + localStorage.getItem("token")} : {};
    headers['content-type'] = 'application/x-www-form-urlencoded';

    return headers;
}

// Run a plain request with all default values
export const request = async (path, method = "GET", body = {}, headers = {}) => {
    return await fetch("/api/" + path, {
        headers: {...getHeaders(), ...headers}, method,
        body: method !== "GET" ? new URLSearchParams(body) : undefined
    });
}

// Run a GET request and get the json of the response
export const jsonRequest = async (path, headers = {}) => {
    return (await request(path, "GET", null, headers)).json();
}

// Run a POST request and post some values
export const postRequest = async (path, body = {}, headers = {}) => {
    return await request(path, "POST", body, headers);
}

// Run a PUT request update a resource
export const putRequest = async (path, body = {}, headers = {}) => {
    return await request(path, "PUT", body, headers);
}

// Run a PATCH request update a resource
export const patchRequest = async (path, body = {}, headers = {}) => {
    return await request(path, "PATCH", body, headers);
}

// Run a DELETE request and delete a resource
export const deleteRequest = async (path, body = {}, headers = {}) => {
    return await request(path, "DELETE", body, headers);
}