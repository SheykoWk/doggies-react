import axios from 'axios';

const URL = 'https://dog.ceo/api/breeds/image/random'

const getDoggies = async () => {
    const req = await axios.get(URL)
    return req
}

export default getDoggies
