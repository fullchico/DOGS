import React from 'react'
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  const hadleClick = () => {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={hadleClick}>
      <img src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
