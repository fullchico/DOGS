import React,{useContext} from 'react'
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import Feed from '../../../Components/Feed/FeedController/FeedController';
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost';
import UserStats from '../UserStats/UserStats';
import { UserContext } from '../../../Hooks/UserContext/UserContext';
const UserController = () => {
  
const { data } = useContext(UserContext)

  return (
    <section className="container">
      
     <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route  path="estatisticas" element={<UserStats/>} />
      </Routes>
    
    </section>
  )
}

export default UserController
 