import { axi as axios } from './axios'

const getRooms = () => {
    try {
        const { data } = await axios.get('/popularRooms')
        return data
    } catch (err) {
        console.error(err);
    }
}

const getScheduledRooms = () => {
    try {
        const { data } = await axios.get('/scheduledRooms')
        return data
    } catch (err) {
        console.error(err);
    }
}

const getNumberOfRooms = () => {
    try {
        const { data } = await axios.get('/statistics') //totalRooms
        return data
    } catch (err) {
        console.error(err);
    }
}


export { getNumberOfRooms, getRooms, getScheduledRooms }