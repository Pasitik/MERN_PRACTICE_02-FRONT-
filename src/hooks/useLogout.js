
import React from 'react'
import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutContext'


export const useLogout = () => {
  const {dispatch} =useAuthContext()
  const{dispatch: workoutDispatch}=useWorkoutContext()

  const logout= ()=>{
//remove user object from local storage 
  localStorage.removeItem("user"); 
//set global object(user) to null
  dispatch({type:"LOGOUT"})
  workoutDispatch({type:"SET_WORKOUTS", payload: null})
  }
  return {logout}
}

