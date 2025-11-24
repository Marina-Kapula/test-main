import axios from 'axios'

const baseUrl = 'https://beckend-main.onrender.com/api/persons'  // ← должно быть так!

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)
// update, remove – аналогично

export default { getAll, create }
