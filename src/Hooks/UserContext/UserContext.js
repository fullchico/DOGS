import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../../services/api';

// direcionar usuario para uma pagia apos uma acao
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const userLogout = useCallback( () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  },[navigate]);

  

  // metodo get buscando usuario na api 
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);

  }

  // metodo post, com token de validacao de usuario
  const userLogin = async (username, password) => {

    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Error, Usuario Invalido`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      getUser(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token invalido');
          await getUser(token);
          const json = await response.json();
          console.log(json);
        }
        catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout])

  

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading }}>
      {children}
    </UserContext.Provider>
  )
};
