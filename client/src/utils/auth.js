const { setAuthToken } = require("./http");

function setCurrentUserToken(token) {
    localStorage['user'] = token;
    checkUserToken();
}

function checkUserToken() {
    setAuthToken(localStorage['user']);
}

function removeCurrentUserToken() {
    delete localStorage['user'];
}

module.exports = { setCurrentUserToken, removeCurrentUserToken, checkUserToken};