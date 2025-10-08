import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Testpage from "./pages/Testpage";
//import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Testpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
