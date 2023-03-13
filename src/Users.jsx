import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    loadUsers()
  },[])

  const loadUsers = async()=>{
   const response = await axios.get('http://localhost:3000/users')
   console.log(response.data)
   setUsers(response.data)
  
  }

  const deleteUser =async (id)=>{
      await  axios.delete('http://localhost:3000/users/' + id)
    loadUsers();
  }

  return (
    <div>
      <h1>UsersList</h1>
      <button onClick={()=>navigate('user/add')}>Add Users</button>
      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
         <tbody>
            {
              users.map(el => <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <button onClick={()=>navigate('/user/' + el.id)}>details</button>
                  <button onClick={()=>navigate('/user/edit/' + el.id)}>edit</button>
                  <button onClick={()=>deleteUser(el.id)}>delete</button>
                </td>
              </tr>)
            }
         </tbody>
        </table>
    </div>
  )
}
