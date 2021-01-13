import React, { useContext } from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import useForms from '../../Hooks/useForms/useForms'
import { UserContext } from '../../Hooks/UserContext/UserContext'
import { USER_POST } from '../../services/api'

const LoginCreate = () => {
  const username = useForms();
  const email = useForms('email');
  const password = useForms();

  const {userLogin} = useContext(UserContext);

  const handleSubmit = async (event) =>{
  event.preventDefault();
    const{url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url,options);
    if(response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" placeholder="Nome" {...username}/>
        <Input label="Email" type="email" name="email" placeholder="Email" {...email}/>
        <Input label="Senha" type="password" name="password" placeholder="password" {...password}/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate