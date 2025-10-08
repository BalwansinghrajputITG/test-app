import Header from './components/Header'
import React from 'react'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Testpage from './pages/Testpage';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import AboutPage from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Testpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
