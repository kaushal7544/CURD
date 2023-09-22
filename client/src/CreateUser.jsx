/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser (){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate = useNavigate()

  const Submit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await axios.post(('http://localhost:3003/createUser'), {name,email,age})
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Submit}>
        <h2>Add User</h2>
        <div className='mb-2'>
          <label>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control' 
            onChange={(e) => {setName(e.target.value)}} />
        </div>
        <div className='mb-2'>
          <label>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control' 
            onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div className='mb-2'>
          <label>Age</label>
          <input type='text' placeholder='Enter Age' className='form-control'
          onChange={(e) => {setAge(e.target.value)}} />
        </div>
        <button className='btn btn-dark'>Add User</button>
      </form>
    </div>
  </div>
  )
}

export default CreateUser
