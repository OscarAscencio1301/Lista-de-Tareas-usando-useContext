import React, { useReducer, useState } from 'react'
import { AppRouter } from './AppRouter'
import { reducer } from './helpers/reducer'
import { TareasContext } from './TodoContext'

const init = () =>{
  return JSON.parse(localStorage.getItem("tareasCompletadas")) || []
}
export const Control = () => {
  const [tareas, dispatch] = useReducer(reducer, [], init)
  
    return (
        <div>
        <TareasContext.Provider value={{
          tareas,
          dispatch
        }}>
          <AppRouter /> 
        </TareasContext.Provider> 
        </div>
    )
}
