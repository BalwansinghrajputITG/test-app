import Header from "./components/Header";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Testpage from "./pages/Testpage";

// import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import { useState } from "react";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import SignUp from "./Components/Signup";
import { useEffect } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState("");

  useEffect(() => {
    setIsAuth(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <Header auth={isAuth} />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sigup" element={<SignUp />}></Route>
        <Route element={<ProtectedRoutes auth={isAuth} />}>
          <Route path="/test" element={<Testpage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
