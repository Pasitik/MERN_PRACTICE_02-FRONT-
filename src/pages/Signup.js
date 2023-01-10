import { React, useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')
    const {error, isLoading, signup} = useSignup()

    const handleSubmit=async(e)=>{
        e.preventDefault()

        await signup(email, password)
        //console.log(email, password)
    }

  return (
    <form className='max-w-T p-20 bg-white rounded-md m-40-auto' onSubmit={handleSubmit}>
        <h3 className='mb-5 font-bold'>Sign Up</h3> 

        <label>Email: </label>
        <input
            type="email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className="block p-2.5 mt-3 mb-10 w-full border-solid rounded box-border border-2"
        />
        <label>Password: </label>
        <input
            type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="block p-2.5 mt-3 mb-10 w-full border-solid rounded box-border border-2"
        />
        <button disabled={isLoading} className=' bg-green-500 border-0 color-white p-2.5 poppins rounded-lg margin-20 text-slate-100'>Sign up</button>
        {error && <div className='flex flex-wrap p-2.5 bg-ffefef text-red-400 rounded mt-5 my-0 border-solid border-2 border-red-600 '>{error}</div>}
    </form>
  )
}

export default Signup