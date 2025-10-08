import Header from './components/Header'
import React from 'react'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Testpage from './pages/Testpage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Testpage />}></Route>
      </Routes>


    </div>
  )
}

export default App;