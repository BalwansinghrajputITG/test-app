import Header from "./Components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Testpage from "./pages/Testpage";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import SignUp from "./Components/SignUpPage";

import AboutPage from "./pages/About";
import NotFound from "./Components/NotFound";
import AdminDasbord from "./pages/AdminDasbord";
import { AdminContextProvider } from "./provider/AdminProvider";
import PrivateRouter from "./Components/PrivateRouter";
import { MyContextProvider } from "./Components/AuthContext";

const App = () => {
  return (
    <AdminContextProvider>
      <MyContextProvider>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />

          {/*  Admin protected route */}
          <Route element={<PrivateRouter />}>
            <Route path="/admin/dasbord" element={<AdminDasbord />} />
          </Route>

          {/* Normal protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/test" element={<Testpage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyContextProvider>
    </AdminContextProvider>
  );
};

export default App;
