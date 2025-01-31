import React, { useState } from 'react'
import { auth } from '../config/firebase.js'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../components/Loader.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  onAuthStateChanged(auth, (user) => {
    if(user){
      navigate('/home')
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      toast.success('Logged in successfully')
      navigate('/home')
    } 
    catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return loading ? (
    <div className='flex items-center justify-center h-screen'>
      <Loader />
    </div>
    ):(
    <div className='flex items-center justify-center h-screen'>
      <div className='w-96 bg-white p-6 rounded-lg border border-gray-300'>
        <h1 className='text-3xl font-semibold mb-6'>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600 font-medium'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-600 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white rounded-lg px-3 py-2 mt-4 cursor-pointer hover:bg-blue-700'>Login</button>
          
          <div className='flex justify-center items-center mt-4'>
            <a href="/register">New User? Create a New Account</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login