const headers = {
    'Content-Type': 'application/json;charset=utf-8'
};

const call = (path, method, data, signal) => {
    return fetch(`http://localhost:5000/api/v1/${path}`, {
        method,
        mode: 'cors',
        body: data && JSON.stringify(data),
        headers,
        signal
    }).then((response) => {
        if (!response.ok) {
            return Promise.reject(response);
        }

        return response;
    });
};

const get = (url, data, signal) => call(url, 'get', data, signal);

const post = (url, data, signal) => call(url, 'post', data, signal);

const del = (url, data, signal) => call(url, 'delete', data, signal);

const setAuthToken = (token) => {
    headers['Authorization'] = `Bearer ${token}`;
};

const removeAuthToken = () => {
    delete headers['Authorization'];
};

module.exports = { get, post, del, setAuthToken, removeAuthToken };