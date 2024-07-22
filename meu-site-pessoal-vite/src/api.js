import axios from 'axios';

const url = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: "https://site-pessoal-api-5r8b.onrender.com/api"  
});

export default api;