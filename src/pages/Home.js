import React from 'react'
import {useEffect } from 'react';
import WorkoutDetials from '../components/WorkoutDetials'; 
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const {workouts, dispatch}= useWorkoutContext()
    const {user} = useAuthContext()
    useEffect(()=>{
        const fetchWorkouts= async () => {
            const response= await fetch("/api/workouts", {
                headers:{
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const json= await response.json()
            //console.log("this "+ json)

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if(user){
            fetchWorkouts()
        }

    },[dispatch, user])
  return (
    <div className='grid grid-cols-3 gap-4 truncate w-full'>
        <div className='lg:col-span-2 truncate'>
            {workouts && workouts.map((workout)=>{
                return(
                    <div key={workout._id}>
                        <WorkoutDetials workout={workout}/><br/>
                    </div>
            )}
            )}
            </div>
            <WorkoutForm/>
    </div>
  )
}

export default Home;