import axios from 'axios'

const client = location.hostname;

async function login() {
    try {
        const { data } = await axios.get(`${client}/auth/github`, { withCredentials: true })
        return data
    } catch (err) {
        console.error(err);
    }
}

async function logout() {
    try {
        const { data } = await axios.get(`${client}/auth/logout`, { withCredentials: true })
        return data
    } catch (err) {
        console.error(err);
    }
}

export { login, logout }

