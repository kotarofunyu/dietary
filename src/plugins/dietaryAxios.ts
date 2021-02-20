import axios from 'axios'

// ToDo: replace values with environmental variables
export default axios.create({
  baseURL: 'http://localhost:3200/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Custom-Header-Element': 'kochandayo',
  },
})
