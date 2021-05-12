import { axi as axios } from './axios'

const getBots = () => {
    try {
        const { data } = await axios.get('/bots')
        return data
    } catch (err) {
        console.error(err);
    }
}

export { getBots }