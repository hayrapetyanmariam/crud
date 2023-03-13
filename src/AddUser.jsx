import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AddUser = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''

  })


  const changeHandler = (e)=>{
    e.preventDefault();
    console.log(e.target.value, e.target.name)
    setUser({...user, [e.target.name]:e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/users/', user)
    navigate('/')
  }

  return (
    <div>
      <h1>Add User</h1>
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
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}
