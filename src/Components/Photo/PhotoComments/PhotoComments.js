import React, { useContext, useEffect, useRef, useState } from 'react'
import {UserContext} from '../../../Hooks/UserContext/UserContext'
import PhotoComentsForm from '../PhotoComentsForm/PhotoComentsForm'
import style from './PhotoComments.module.css';
const PhotoComments = (props) => {
  const [comments, setComments ] = useState(() => props.comments)
  const commentsSection = useRef(null)
  const {login} = useContext(UserContext)


  // scroll comentarios
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])
  return (
    <>
      <ul ref={commentsSection} className={`${style.comments} ${props.single ?style.single : ''} `}>
        {comments.map( comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
            </li>)
        )}
      </ul>
      {login && <PhotoComentsForm single={props.single} id={props.id} setComments={setComments}/>}
    </>
  )
}

export default PhotoComments
