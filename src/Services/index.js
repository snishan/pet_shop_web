import axios from 'axios';


const createAxiosInstance = () => {
    return axios.create({
      baseURL: 'http://localhost:8081',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };
  
  export default createAxiosInstance();