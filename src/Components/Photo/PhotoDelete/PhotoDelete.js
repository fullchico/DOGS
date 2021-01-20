import React from 'react'
import useFetch from '../../../Hooks/useFetch/useFetch';
import { PHOTO_DELETE } from '../../../services/api';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({id}) => {
  const {loading, request } = useFetch();

  const hadleClick = async () => {
    
    const confirm = window.confirm('Tem certeza que deseja deletar?')

    if(confirm){
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id,token);
      const {response} = await request(url, options);
      if(response.ok) window.location.reload();
    }

  }

  return (
    <>
      {loading 
      
      ? (<button className={styles.delete} disabled>Deletando...</button>)
      :(
        <button onClick={hadleClick} className={styles.delete}>Deletar</button>
      )} 
      
    </>
  )
}

export default PhotoDelete
