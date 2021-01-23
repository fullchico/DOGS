import React, { useState } from 'react'
import styles from './ImageLoading.module.css';

const ImageLoading = ({alt,...props}) => {
  const [skeleto, setSkeleton] = useState(true)

  const handleLoad =({target})=>{
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleto && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props}/>
    </div>
  )
}

export default ImageLoading
