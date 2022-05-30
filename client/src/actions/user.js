async function signIn(email, password) {
    const user = { email, password };
    
    try {
        const response = await fetch(`http://localhost:5000/api/v1/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const token = await response.json();
        localStorage.setItem('user', token);
        return true;
    } catch {
        return false;
    }
}

module.exports = { signIn }