import React, { useEffect, useState } from 'react'
import useForm from '../../../Hooks/useForms/useForms'
import useFetch from '../../../Hooks/useFetch/useFetch';
import Error from '../../../Helper/Error/Error';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import { PHOTO_POST } from '../../../services/api';

import styles from './UserPhotoPost.module.css';
import { useNavigate } from 'react-router-dom';
import Head from '../../../Helper/Head/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const [ img , setImg ] = useState({});
  const { data, error, loading, request } = useFetch();
  
  const navigate = useNavigate();

  useEffect(() => {
    if(data) navigate('/conta')
  },[data, navigate])

  const hadleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('img', img.raw);
      formData.append('nome', nome.value);
      formData.append('peso', peso.value);
      formData.append('idade', idade.value);

      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_POST(formData,token);
      request(url, options);
    }

    // preview de foto 
    const hadleImgChage = ({target}) => {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0]
      })
    }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Postar Fotos'/>
       <form onSubmit={hadleSubmit}>
         <Input label="Nome" type="text" name="nome"{...nome}/>
         <Input label="Peso" type="text" name="peso" {...peso}/>
         <Input label="Idade" type="text" name="idade"{...idade}/>
         <input className={styles.file} type="file" name="img" id="img" onChange={hadleImgChage}/>
         {loading
          ? (<Button disabled>Enviando...</Button>)
          : (<Button>Enviar</Button>)
        }
         <Error error={error}/>
       </form>
            
       <div>
         {img.preview && <div className={styles.preview} style={{backgroundImage:`url('${img.preview}')`}}></div>}
       </div>
    </section>
  )
}

export default UserPhotoPost
