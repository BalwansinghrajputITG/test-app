import axios from "axios";

const BASE_URL = "https://test-app-backend-ly6a.vercel.app";

export const singup = async (obj) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/user/register`, obj);

    const data = await res.data;
    return data;
  } catch (error) {
    alert("singup FAILD");
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
    alert("LOGIN FAILD");
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
    alert(`axiox error dashboard, ${error.response.data}`);
    console.log("axiox error dashboard", error.response.data);
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
    alert(`axiox error getAllUser, ${error.response.data}`);
    console.log("axiox error getAllUser", error.response.data.msg);
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
    alert(`axiox error getAllUser, ${error.response.data}`);
    console.log("axiox error getAllUser", error.response.data.msg);
  }
};
