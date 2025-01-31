import React, { useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const Sidebar = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut(auth)
      setLoading(false)
      toast.success('Logged out successfully')
      navigate('/')
    }
    catch (error) {
      toast.error("Error Signing Out")
    }
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-start h-screen p-6 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 border-r border-gray-300'>
      <button onClick={handleSignOut} className='text-2xl text-white font-bold border px-4 py-2 rounded-lg bg-red-500 hover:bg-red-800 cursor-pointer'>Signout</button>
    </div>
  )
}

export default Sidebar