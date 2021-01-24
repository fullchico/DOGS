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
import Login from './Pages/Login/LoginController/LoginController';
import User from './Pages/User/UserController/UserController';
import PhotoPageId from './Components/Photo/PhotoPageId/PhotoPageId';

// virificacao de rota do usuario logado
import ProtectRoutes from './Helper/ProtectRoutes/ProtectRoutes';
import UserProfille from './Pages/User/UserProfille/UserProfille';
import NotFound from './Components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/foto/:id" element={< PhotoPageId/>} />
          <Route path="/perfil/:user" element={< UserProfille/>} />
          <Route path="*" element={<NotFound/>} />
          <ProtectRoutes path="/conta/*" element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>

    </BrowserRouter>
  )
}

export default App;

