import React, { useEffect, useState } from 'react'

import useFetch from '../../../Hooks/useFetch/useFetch'
import { PASSWORD_RESET } from '../../../services/api';
import Error from '../../../Helper/Error/Error'
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import useForms from '../../../Hooks/useForms/useForms';



const LoginPasswordReset = () => {

  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const  password  = useForms();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }

  }

  return (
    <div>
      <h1 className="title">Ressetar a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        
        {loading
          ? (<Button disabled>Resetando...</Button>)
          : (<Button>Resetar</Button>)}

      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset
