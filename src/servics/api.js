import axios from "axios";

export const singup = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        email: "text4@gamil.com",
        fullName: "test",
        phoneNumber: 123456789000,
        password: "1234567890",
        userClass: 13,
      }
    );

    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log("axiox error singup", error);
  }
};

export const login = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/user/login", {
      email: "text@gamil.com",
      password: "1234567890",
    });

    const data = res.data;
    console.log("data", data);
  } catch (error) {
    console.log("axiox error login", error);
  }
};
