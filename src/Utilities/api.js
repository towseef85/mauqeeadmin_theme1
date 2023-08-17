import axios from "axios";

const httpApi = axios.create({
    //baseURL: 'http://lavishkeys-001-site2.htempurl.com/api/',
    baseURL: 'https://localhost:7019/api/', //YOUR_API_URL HERE
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const token = localStorage.getItem('token_ecom');
  if(token)  httpApi.defaults.headers.Authorization = `Bearer ${token}`;

  
  httpApi.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response && err.response.data.msg === 'Token is not valid') {
        //console.log('Need to logout user');
         //store.dispatch({type: LOGOUT});
      }
      return Promise.reject(err);
    }
  )

  export const setAuthToken = (token) => {
    if (token) {
        httpApi.defaults.headers.Authorization = `Bearer ${token}`;
      localStorage.setItem('token_ecom', token);
    } else {
      delete httpApi.defaults.headers.Authorization;
      localStorage.removeItem('token_ecom');
    }
  };

  export default httpApi;

