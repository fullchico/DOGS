import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhotoContente from '../PhotoContente/PhotoContente';
import useFetch from '../../../Hooks/useFetch/useFetch';
import Error from '../../../Helper/Error/Error'
import Loading from '../../../Helper/Loading/Loading'
import { PHOTO_GET } from '../../../services/api';
import Head from '../../../Helper/Head/Head';
const PhotoController = () => {

  const { id } = useParams();
  const {data,loading, error, request} = useFetch()
  
    useEffect(() =>{
      const { url, options } = PHOTO_GET(id);

      request(url, options);
    }, [request, id])


    if (error)return <Error error={error}/>
    if(loading) return <Loading/>;
    if(data)return <section className="container mainContainer">
      <Head title={data.photo.title}/>
      <PhotoContente single="true" data={data}/>
    </section>
    
  
  else return null;
}

export default PhotoController
