import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TareasContext } from './TodoContext'

export const AppLista = () => {
    let {tareas,dispatch} = useContext(TareasContext)
    

    useEffect(() => {
       localStorage.setItem("tareasCompletadas", JSON.stringify(tareas))
    }, [tareas]);

    const finalizada = tareaId => {
        dispatch({
            type: 'finalizado',
            payload: tareaId
        })
    }
    const borrar = tareaId => {
        dispatch({
            type:'borrar', 
            payload: tareaId})
    }
   
    
    return (
        <div className="datos">
            <h1 className="tituloPrincipal">Lista</h1>
            <hr />
            <ol className="list-group">
                {
                tareas.map(tarea => 
                    <li
                        key={tarea.id}
                        className="list-group-item item px-5">
                        <p
                            onClick={() => finalizada(tarea.id)}
                            className={`${tarea.finalizado ? 'completado' : null}`}>{tarea.tarea}</p>
                        <div>
                            <button className="btn btn-danger boton" onClick={() => borrar(tarea.id)}   
                           >Borrar</button>
                        </div>
                </li>)
                }
               
                
                
            </ol>
        </div>
    )
}
