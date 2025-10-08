import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Testpage from "./pages/Testpage";
//import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import { useState } from "react";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Header auth={isAuth} />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ProtectedRoutes auth={isAuth} />}>
          <Route path="/test" element={<Testpage />}></Route>
          {/* <Route path="/dashboard" element={< />}></Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
