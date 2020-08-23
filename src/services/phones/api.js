import axios from 'axios';

export const getDataFromApi = () => axios.get('http://localhost:5000/phones');
