import React, { useEffect } from 'react'
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../../Hooks/useFetch/useFetch';
import  Error  from '../../../Helper/Error/Error';
import  Loading  from '../../../Helper/Loading/Loading';
import { PHOTOS_GET } from '../../../services/api';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({page, user, setModalPhoto, setInfinite}) => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    
    const fetchPhotos = async () =>{
      // marcete para parar o scroll
      const total = 3
      const{url, options } = PHOTOS_GET({page ,total, user});
      request(url, options);
      const { response, json} = await request(url,options);
      if(response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos();
  }, [request, user,page, setInfinite])

  if(error) return<Error error={error}/>
  if(loading) return<Loading/>;
  if (data) 
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map( photo => (<FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>))}
      
    </ul>
  );
  else return null;
}

export default FeedPhotos
