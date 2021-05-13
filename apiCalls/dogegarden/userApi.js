import { axi as axios } from './axios'

const searchUser = (userId) => {
    try {
        const { data } = await axios.get(`/search/${userId}`) //multiple results
        return data
    } catch (err) {
        console.error(err);
    }
}

const getUser = (userId) => {
    try {
        const { data } = await axios.get(`/search/${userId}`) //might have multiple results
        const user = data.items[0] //so get the first one
        return user
    } catch (err) {
        console.error(err);
    }
}

export { getUser, searchUser }
