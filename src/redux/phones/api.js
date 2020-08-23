import axios from 'axios';

export const getDataFromApi = () => {
  return axios.get('http://localhost:5000/phones');
};
