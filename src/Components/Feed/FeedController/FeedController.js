import React, { useEffect, useState } from 'react'
import FeedModal from '../FeedModal/FeedModal'
import FeedPhotos from '../FeedPhotos/FeedPhotos'

const FeedController = ({user}) => {
  const [ modalPhoto, setModalPhoto ] = useState(null);
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  // infinite scroll
  useEffect(() => {
    
    let wait = false;
    const infiniteScroll = (event) => {
      if(infinite) {
        const scroll = window.scrollY
        const heigth = document.body.offsetHeight - window.innerHeight
        if(scroll >heigth * 0.75 && !wait){
          setPages((pages) => [...pages, pages.length +1]);
          wait= true;
          setTimeout(() =>{
            wait = false;
          },500)
        }
      }
      
    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  },[infinite])

  return (
    <div>
     { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}

     {pages.map(page => (
       <FeedPhotos key={page}  user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>
     ))}
      
     
    </div>
  )
}

export default FeedController
