import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import useForms from '../../Hooks/useForms/useForms';
import { UserContext } from '../../Hooks/UserContext/UserContext';
import Error from '../../Helper/Error/Error';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForms();
  const password = useForms();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }

  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit} >

        <Input label="Usuario" {...username} id="username" name="username" type="text" placeholder="nome" />

        <Input label="Senha" {...password} id="password" name="password" type="password" placeholder="senha" />
        {loading ? <Button disabled >Carregando...</Button>
          : <Button>Entrar</Button>}

        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styles.buttonCriar} to="/login/create">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
