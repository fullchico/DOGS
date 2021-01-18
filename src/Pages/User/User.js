import React,{useContext} from 'react'
import { UserContext } from '../../Hooks/UserContext/UserContext';
const User = () => {
  const { data } = useContext(UserContext);

  if(data === null)return null
  return (
    <div>
      <h1>{data.nome}</h1>
    </div>
  )
}

export default User
