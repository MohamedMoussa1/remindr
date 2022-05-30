const { setCurrentUserToken, removeCurrentUserToken } = require("../utils/auth");
const { post, get } = require("../utils/http");

async function signIn(email, password) {
    const user = { email, password };
    
    try {
        const response = await post("user/login", user);
        const token = await response.json();
        
        setCurrentUserToken(token);
        
        return true;
    } catch {
        return false;
    }
}

function signOut() {
    removeCurrentUserToken();
}

async function getUser() {
    try {
        const response = await get("user");
        const user = await response.json();

        return user;
    } catch {
        return null;
    }
}

module.exports = { signIn, signOut, getUser };