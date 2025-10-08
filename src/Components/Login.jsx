// import { login } from "../servics/api";
// import { useState, useEffect } from "react";

// function Login() {
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   useEffect(() => {
//     login();
//   }, []);

//   async function OnSubmitForm(e) {
//     e.preventDefault();
//     if (ValidEmail(Email) && ValidPassword(Password)) {
//     } else {
//       console.log("Invalid email or password");
//     }
//   }

//   function ValidEmail(email) {
//     let value = email.trim();

//     if (value === "") return false;
//     if (!value.includes("@") || !value.includes(".")) return false;
//     if (value[0] === "@" || value[0] === ".") return false;
//     if (value[value.length - 1] === "@" || value[value.length - 1] === ".")
//       return false;

//     const atIndex = value.indexOf("@");
//     const dotIndex = value.lastIndexOf(".");
//     if (atIndex > dotIndex) return false;
//     if (dotIndex - atIndex <= 1) return false;
//     if (value[0] >= "0" && value[0] <= "9") return false;

//     const validEndings = [".com", ".in", ".org", ".net"];
//     let hasValidEnding = false;

//     for (let end of validEndings) {
//       if (value.endsWith(end)) {
//         hasValidEnding = true;
//         break;
//       }
//     }

//     return hasValidEnding;
//   }

//   function ValidPassword(password) {
//     let value = password.trim();
//     if (value.length < 6) return false;

//     let hasLower = false;
//     let hasUpper = false;
//     let hasNumber = false;

//     for (let char of value) {
//       if (char >= "a" && char <= "z") hasLower = true;
//       else if (char >= "A" && char <= "Z") hasUpper = true;
//       else if (char >= "0" && char <= "9") hasNumber = true;
//     }

//     return hasLower && hasUpper && hasNumber;
//   }

//   return (
//     <div className="loginpage flex justify-center items-center h-screen w-full bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#6bcbef] to-[#a17fe0] bg-[length:400%_400%] animate-gradient">
//       <form
//         onSubmit={OnSubmitForm}
//         className="form flex flex-col gap-5 text-white shadow-lg rounded-2xl max-w-sm w-full px-8 py-6 bg-black/40 backdrop-blur-md bg-[url('/public/loginBackgroundimg.jpg')] bg-center bg-no-repeat bg-local bg-cover p-6 rounded-xl shadow-lg"
//       >
//         <h1 className="text-5xl font-bold text-center mb-6">Login</h1>

//         <input
//           className="border-b-2 border-white focus:bg-white focus:text-black rounded-md px-3 py-2 outline-none w-full"
//           type="email"
//           placeholder="Email Address"
//           value={Email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           className="border-b-2 border-white focus:bg-white focus:text-black rounded-md px-3 py-2 outline-none w-full"
//           type="password"
//           placeholder="Password"
//           value={Password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button className="loginbtn bg-purple-950 text-white px-6 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105">
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        values={email}
        label="Email address"
        id="email-address"
        name="email"
        type="email"
        onChange={() => setEmail(email)}
        required
        autoComplete="email"
        placeholder="Email or Username"
      />
      <input
        value={password}
        onChange={() => setPassword(password)}
        label="Password"
        id="xyz"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        placeholder="Password"
      />
      <button type="sumbit">Login</button>
    </form>
  );
}

export default Login;
