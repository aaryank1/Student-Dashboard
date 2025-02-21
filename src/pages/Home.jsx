import React, { useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Home = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     toast.success(`Welcome back`)
  //   } else {
  //     navigate('/')
  //   }
  // })

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
    <div className='flex'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default Home