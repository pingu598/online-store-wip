import axios from 'axios'

const itemById = async id => {
const url = `http://localhost:3001/items/${id}`
  const response = await axios.get(url)
  return response.data
}

const getAllItems = async () => {
  const url = `http://localhost:3001/items`
  const response = await axios.get(url)
  return response.data
}

export default {itemById, getAllItems}