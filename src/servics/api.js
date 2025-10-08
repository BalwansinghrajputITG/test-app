import axios from "axios";

export const singup = async (obj) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      obj
    );

    const data = await res.data;
    return data;
  } catch (error) {
    console.log("axiox error singup", error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/user/login", {
      email: email,
      password: password,
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log("axiox error login", error.response.data);
  }
};
