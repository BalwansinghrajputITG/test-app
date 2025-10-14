import axios from "axios";
import Alert from "../Components/Alert";

const BASE_URL = "http://localhost:3000";

export const singup = async (obj) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/register`, obj);

    const data = await res.data;
    return data;
  } catch (error) {
 <Alert message="SignUp UnSuccessfull" color="red" onClose={()=>{
          }}/>
    console.log("axiox error singup", error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/login`, {
      email: email,
      password: password,
    });

    const data = res.data;
    return data;
  } catch (error) {
     <Alert message="LogIn UnSuccessfull" color="red" onClose={()=>{
          }}/>
    console.log("axiox error login", error);
  }
};

export const dashboard = async (email) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/dashboard`, {
      email: email,
    });
    const data = res.data;
    return data;
  } catch (error) {
 <Alert message={`axios error dashboard , ${error.response.data}`} color="red" onClose={()=>{
          }}/>
    console.log("axios error dashboard", error.response.data);
  }
};

export const getAllUser = async (role) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/Allusers`, {
      role,
    });
    const data = res.data;
    return data;
  } catch (error) {
      <Alert message={`axios error getAllUser , ${error.response.data.msg}`} color="red" onClose={()=>{
          }}/>
    console.log("axios error getAllUser", error.response.data.msg);
  }
};

export const deleteUserById = async (id) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/delete`, {
      _id: id,
    });
    const data = res.data;
    return data;
  } catch (error) {
  <Alert message={`axiox error getAlluser , ${error.response.data}`} color="red" onClose={()=>{
          }}/>
    console.log("axios error getAllUser", error.response.data.msg);
  }
};
