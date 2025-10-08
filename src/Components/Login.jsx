import React, { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function OnSubmitForm(e) {
    e.preventDefault();
    if (ValidEmail && ValidPassword) {
      console.log(Email, Password);
    }
  }
function ValidEmail(email) {
  let value = email.trim();

  if (value === "") return false;

  if (!value.includes("@") || !value.includes(".")) return false;

  if (value[0] === "@" || value[0] === ".") return false;

  if (value[value.length - 1] === "@" || value[value.length - 1] === ".") return false;

  const atIndex = value.indexOf("@");
  const dotIndex = value.lastIndexOf(".");
  if (atIndex > dotIndex) return false;

  if (dotIndex - atIndex <= 1) return false;

  if (value[0] >= "0" && value[0] <= "9") return false;

  const validEndings = [".com", ".in", ".org", ".net"];
  let hasValidEnding = false;

  for (let end of validEndings) {
    if (value.endsWith(end)) {
      hasValidEnding = true;
      break;
    }
  }

  if (!hasValidEnding) return false;


  return true;
}


  function ValidPassword(Password) {
    let value = Password;
    if (value.length < 6) {
      return false;
    }
    if (!(value > "a") || value < "z") {
      return false;
    }

    return true;
  }

  return (
    <>
      <div className="loginpage">
        <form
          onSubmit={OnSubmitForm}
          className="form flex text-white flex-col gap-5 m-auto  justify-center shadow-lg   rounded-2xl max-w-sm w-full px-8 py-6"
        >
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            Login
          </h1>
          <label htmlFor="Name" className=" text-white font-medium mb-1 w-full">
            <input
              className="border-b-2 focus:bg-white focus:rounded-md focus:text-black text-white bodrer-b-md px-3 py-2  inline-block outline-none w-full "
              type="email"
              id="Name"
              placeholder="Email Address"
              value={Email}
              required
              onChange={(e) => {
                if (ValidEmail) {
                  setEmail(e.target.value);
                }
              }}
            />
          </label>
          <label htmlFor="password" className="text-gray-700 font-medium mb-1">
            <input
              className="border-b-2 focus:bg-white focus:rounded-md focus:text-black text-white bodrer-b-md px-3 py-2  inline-block outline-none w-full "
              type="password"
              id="password"
              placeholder="Password"
              value={Password}
              required

              onChange={(e) => {
                if (ValidPassword) {
                  setPassword(e.target.value);
                }
              }}
            />
          </label>

          <button className="loginbtn bg-purple-950 text-white px-6 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
