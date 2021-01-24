import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './LoginController.module.css';

//importar rotas
import LoginForm from '../LoginForm/LoginForm';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';
import { UserContext } from '../../../Hooks/UserContext/UserContext';
import NotFound from '../../../Components/NotFound/NotFound';

const Login = () => {

  // autologin, passando rota caso usuario já esteja 
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>

    </div>
  )
}

export default Login
