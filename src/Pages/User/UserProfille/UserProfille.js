import React from 'react'
import Feed from '../../../Components/Feed/FeedController/FeedController'
import {useParams} from 'react-router-dom'

const UserProfille = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed user={user}/>
    </section>
  )
}

export default UserProfille
