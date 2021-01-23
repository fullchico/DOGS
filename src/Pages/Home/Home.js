import React from 'react'
import FeedController from '../../Components/Feed/FeedController/FeedController';
import Loading from '../../Helper/Loading/Loading';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="container mainContainer">
      <FeedController/>
    </div>
  )
}

export default Home
