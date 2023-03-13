import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const EditUser = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''

  })

  useEffect(()=>{
    loadUser();
  },[])

  const loadUser = async()=>{
    const response = await axios.get('http://localhost:3000/users/' + id)
    setUser(response.data)
    console.log(response.data)
  }

  const changeHandler = (e)=>{
    e.preventDefault();
    console.log(e.target.value, e.target.name)
    setUser({...user, [e.target.name]:e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/users/' + id, user)
    navigate('/')
  }

  return (
    <div>
      <h1>Edit User</h1>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <form onSubmit={onSubmit}>
        <div>
            Name: <input type="text" value={user.name} name = 'name' onChange = {changeHandler}/>
        </div>
        <div>
            UserName: <input type="text" value={user.username} name = 'username' onChange = {changeHandler}/>
        </div>
        <div>
            Phone: <input type="text" value={user.phone} name = 'phone' onChange = {changeHandler}/>
        </div>
        <div>
            Email: <input type="email" value={user.email} name = 'email' onChange = {changeHandler}/>
        </div>
        <div>
            WebSite: <input type="text" value={user.website} name = 'website' onChange = {changeHandler}/>
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
