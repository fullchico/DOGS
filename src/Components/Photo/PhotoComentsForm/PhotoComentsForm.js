import React, { useState } from 'react'
import useFetch from '../../../Hooks/useFetch/useFetch';
import { ReactComponent as Enviar } from '../../../Assets/img/enviar.svg';
import Error from '../../../Helper/Error/Error';
import { COMMENT_POST } from '../../../services/api';

import styles from './PhotoComentsForm.module.css';

const PhotoComentsForm = ({id, setComments, single}) => {
  const [comment, setComment ] = useState('')
  const  { request, error }  = useFetch();

  const hadleSubmit = async (event) =>{
    event.preventDefault();
    
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, {comment}, token);
    const { response,json } = await request(url,options)
    
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={hadleSubmit}>
      <textarea 
      className={styles.textarea}
      id="comment"
      name={comment}
      value={comment}
      placeholder="Comentario..."
      onChange={ ({target}) => setComment(target.value)}/>
    
      <button className={styles.button}><Enviar/></button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoComentsForm
