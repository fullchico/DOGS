import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// UserContext, envolvendo toda aplicaao em componente para passar dados
import { UserStorage } from '../src/Hooks/UserContext/UserContext';

// componentes
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

// pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';


const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>

    </BrowserRouter>
  )
}

export default App;

