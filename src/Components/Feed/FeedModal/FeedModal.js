import React, { useEffect } from 'react'
import PhotoContente from '../../Photo/PhotoContente/PhotoContente';
import useFetch from '../../../Hooks/useFetch/useFetch'
import Error from '../../../Helper/Error/Error';
import Loading from '../../../Helper/Loading/Loading';
import {  PHOTO_GET } from '../../../services/api';
import styles from './FeedModal.module.css'

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, error, loading,request} = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url,options);
  }, [photo,request])

  // tirar modal
  const hadleOutsidCLick = (event) => {
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={hadleOutsidCLick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContente data={data}/>}
      
    </div>
  )
}

export default FeedModal
