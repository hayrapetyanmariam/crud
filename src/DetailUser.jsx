import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const DetailUser = () => {

  const {id} = useParams();
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    loadUser()
  }, [])

  const loadUser = async()=>{
    const response = await axios.get('http://localhost:3000/users/' + id)
    setUser(response.data)
  }

  return (
    <div>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <h2>Id: {user.id}</h2>
      <h2>Name: {user.name}</h2>
      <h2>UserName: {user.userName}</h2>
      <h2>Phone: {user.phone}</h2>
      <h2>Email: {user.email}</h2>
      <h2>WebSite: {user.website}</h2>
    </div>
  )
}
