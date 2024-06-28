import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-serve-sooty.vercel.app/'
});

export default api;