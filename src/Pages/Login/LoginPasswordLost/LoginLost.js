import React from 'react'
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import Error from '../../../Helper/Error/Error';
import Head from '../../../Helper/Head/Head';
import useFetch from '../../../Hooks/useFetch/useFetch';
import useForms from '../../../Hooks/useForms/useForms'
import { PASSWORD_LOST } from '../../../services/api';

const LoginPasswordLost = () => {
  const login = useForms();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options)
    }
  }
  return (
    <section className='animeLeft'>
      <Head title="recupere sua senha"/>
      { data
        ? (
          <p style={{color: 'green'}}>Email enviado</p>
        )
        : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / Ususario" type="text" name="Email" {...login} />

            {loading
              ? (<Button>Enviando...</Button>)
              : (<Button>Enviar Email</Button>)}
          </form>
        )
      }

      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
