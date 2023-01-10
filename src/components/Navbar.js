import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout}=useLogout()
  const {user}=useAuthContext()
  
  const handleLogout=()=>{
    logout()
  }
  return (
    <header className='bg-white w-full'>
        <div className='max-w-screen-2xl mx-0 my-auto px-12 py-20 flex items-center justify-between'>
            <Link to = "/" className='text-current w-full'>
                <h1 className='font-bold text-2xl'> Workout Buddy</h1>
            </Link>
            <nav className='flex items-center'>
              {user && (<div className='flex mx-2 items-baseline'>
                <h3>{user.email}</h3>
                <button className='px-5 py-2 ml-2 border-emerald-600 border-solid border-2 text-green-400'
                onClick={handleLogout}>Logout</button>
              </div>)}
              {!user && (<div className=" ml-10 ">
                <Link to ='/login' className='px-5 py-2 mx-2 border-emerald-600 border-solid border-2 text-green-400'>Login</Link>
                <Link to ='/signup' className='px-5 py-2 border-emerald-600 border-solid border-2 text-green-400'>Signup</Link>
              </div>)}
            </nav>
        </div>
    </header>
  )
}

export default Navbar