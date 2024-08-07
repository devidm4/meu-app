import axios from 'axios';

const url = import.meta.VITE_API_URL

const api = axios.create({
    baseURL: url
});

export default api;