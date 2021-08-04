import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/users';

//const BASE_URL="http://localhost:4000"

export const login = (email,password)=>{
    return axios
    .post(`${BASE_URL}/login`,{email,password})
    .then((res)=>res.data)
   // console.log(res.data)
    .catch((error)=>(error.response.data))
}

export const signup=(email,firstname,lastname,password)=>{
    return axios
    .post(`${BASE_URL}/register`,{email,firstname,lastname,password})
    .then((res)=>res.data)
    //console.log(res.data)
    .catch((error)=>(error.response.data));
}