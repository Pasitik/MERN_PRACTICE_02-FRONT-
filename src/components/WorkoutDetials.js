import React from 'react'
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useAuthContext } from '../hooks/useAuthContext' 
 

const WorkoutDetials = ({workout}) => {
  const {dispatch}=useWorkoutContext();
  const{user}=useAuthContext()
  const handleClick = async ()=>{
    if(!user){
      return
    }
    
    const response = await fetch("/api/workouts/"+workout._id, {
      method:"DELETE", 
      headers: {
                  "Authorization": `Bearer ${user.token}`
                }
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type: "DELETE_WORKOUT", payload:json})
    }
  }
  return (
    <div className="bg-white rounded mx-20 my-auto p-10 relative shadow-gray-50">
        <h1 className='mx-0 mb-5 mt-0 text-xl text-green-500 font-bold'>{workout.title}</h1>
        <p className='m-0 text-sm text-gray-600'><strong>Load (kg): </strong>{workout.load}</p>
        <p className='m-0 text-sm text-gray-600'><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true })}</p>
        <span onClick={handleClick} className='absolute top-20 right-20 cursor-pointer bg-s-white p-6 rounded-full material-symbols-outlined'>delete</span>
    </div>
  )
}

export default WorkoutDetials