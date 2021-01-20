import React from 'react'
import styles from './ImageLoading.module.css';
const ImageLoading = ({alt,...props}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img className={styles.img} alt={alt} {...props}/>
    </div>
  )
}

export default ImageLoading
