import React, { useContext } from 'react'
import PhotoComments from '../PhotoComments/PhotoComments';
import { Link } from 'react-router-dom';
import styles from './PhotoContente.module.css';
import { UserContext } from '../../../Hooks/UserContext/UserContext';
import ImageLoading from '../../../Helper/ImageLoading/ImageLoading';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
const PhotoContente = ({data}) => {

  const user = useContext(UserContext)

  const { photo , comments } = data
  console.log(data)
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <ImageLoading src={photo.src} alt={photo.title}/>
      </div>
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              {user.data && user.data.username === photo.author ?(<PhotoDelete id={photo.id}/>) 
              : (<Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>)}
              <span className={styles.visualizacoes}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>

            <ul className={styles.attributes}>
              <li>{photo.peso} Kg</li>
              <li>{photo.idade} Anos</li>
            </ul>
          </div>
        </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  )
}

export default PhotoContente
