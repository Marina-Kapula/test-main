import axios from 'axios'

const baseUrl = 'https://beckend-main.onrender.com/api/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)
// При необходимости — update, remove, etc.

export default { getAll, create }
