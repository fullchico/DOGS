import React, { useEffect } from 'react'
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../../Hooks/useFetch/useFetch';
import  Error  from '../../../Helper/Error/Error';
import  Loading  from '../../../Helper/Loading/Loading';
import { PHOTO_GET } from '../../../services/api';

import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    
    const fetchPhotos = async () =>{
      const{url, options } = PHOTO_GET({page:1,total:6, user:0});
      request(url, options);
      const { response, json} = await request(url,options);
      console.log(json)
    }
    fetchPhotos();
  }, [request])

  if(error) return<Error error={error}/>
  if(loading) return<Loading/>;
  if (data) 
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map( photo => (<FeedPhotosItem key={photo.id} photo={photo}/>))}
      
    </ul>
  );
  else return null;
}

export default FeedPhotos
