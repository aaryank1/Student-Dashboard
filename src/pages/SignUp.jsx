import React, { useState } from 'react'
import { auth } from '../config/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password);
    navigate('/home')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-96 bg-white p-6 rounded-lg border border-gray-300'>
        <h1 className='text-3xl font-semibold mb-6'>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600 font-medium'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-600 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white rounded-lg px-3 py-2 mt-4 cursor-pointer hover:bg-blue-700'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp