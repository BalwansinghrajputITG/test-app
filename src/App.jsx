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
import Alert from "./Components/Alert";
import AddPeople from "./Components/addentitys";


import { MyContextProvider } from "./provider/MyAuthProvider";
import Navbar from "./Components/Navbar";



const App = () => {
  return (
    <AdminContextProvider>
      <MyContextProvider>
        <Navbar />
 
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
 
          {/*  Admin protected route */}
          <Route element={<PrivateRouter />}>
            <Route path="/admin/dasbord" element={<AdminDasbord />} />
            <Route path="/admin/dasbord/addentitys" element={<AddPeople/>} />
          </Route>
 
          {/* Normal protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/test" element={<Testpage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
 
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Alert message={'Welcomes you'} color="#E9D502" onClose={()=>{}}/> 
      </MyContextProvider>
    </AdminContextProvider>
  );
};
export default App;
// red = #CE2029
// green = #006400
// yellow = #E9D502
