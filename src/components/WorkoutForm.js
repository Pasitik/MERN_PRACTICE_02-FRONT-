import React from 'react'
import { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
    const{dispatch}=useWorkoutContext()
    const{user} =useAuthContext() 

    const[title, setTitle]=useState("")
    const[load, setLoad]=useState("")
    const[reps, setReps]=useState("")
    const[err, setErr]=useState(null)
    const[emptyFields,setEmptyFields] = useState([])


const handleSubmit = async (e) =>{
    e.preventDefault() 

    if(!user){
        setErr("You must be logged in")
        return
    }


    const workout={title, load, reps}

    const response= await fetch("/api/workouts", {
        method: "Post",
        body: JSON.stringify(workout), 
        headers:{
            "Content-Type":"application/json", 
            "Authorization": `Bearer ${user.token}`
        }
    }) 
    const json= await response.json();
    if(!response.ok){
        setErr(json.error) 
        setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        setTitle('')
        setLoad('')
        setReps('')
        setErr(null)
        setEmptyFields([])
        console.log('new workout added ', json)
        dispatch({type:'SET_WORKOUTS', payload: json})
    }

}
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3> Add a New Workout</h3>

        <label className='block'>Exercise Title: </label>
        <input 
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "block p-2.5 mt-10 mb-20 w-full border-solid rounded box-border border-red-300 border-2" : "block p-2.5 mt-10 mb-20 w-full border-solid rounded box-border" }  />

        <label className='block'>Load (in kg): </label>
        <input 
        type="number"
        onChange={(e)=>setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "block p-2.5 mb-20 w-full border-2 border-solid border-red-300" : "block p-2.5 mb-20 w-full border-solid rounded"}/>

        <label className='block'>Reps : </label>
        <input 
        type="number"
        onChange={(e)=>setReps(e.target.value)}
        value={reps} 
        className={emptyFields.includes("reps") ? "block p-2.5 mb-20 w-full border-solid border-2 border-red-300 rounded" : " block p-2.5 mb-20 w-full border-solid rounded"}/>

        <button className=' bg-green-500 border-0 color-white p-2.5 poppins rounded-lg margin-20'>Add Workout</button>
        {err && <div className='flex flex-wrap p-2.5 bg-ffefef text-red-400 rounded mt-5 my-0 border-solid border-2 border-red-600 '>{err}</div>}
    </form>
    )
}

export default WorkoutForm