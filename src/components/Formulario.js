import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { TareasContext } from './TodoContext'

export const Formulario = () => {
    const {dispatch} = useContext(TareasContext);

    let  [{info}, recibirValores] =useForm({
        info: ''
    })

    const validarTarea = (e) => {
       
        if(info.trim().length <=1 ){
            return
        }
        const nuevaTarea = {
            id: Date.now(),
            tarea: info,
            finalizado: false
        }
      
      dispatch({
        type: 'agregar',
        payload: nuevaTarea
      })
        
    }
   
    return (
        <div className="datos">
            <h1 className="tituloPrincipal">Agregar Tarea</h1>
            <hr />
            <form>
                <input
                    className="d-block w-100 form-control my-4" 
                    type="text"
                    name="info"
                    placeholder="Tirar la Basura..."
                    value={info}
                    onChange={recibirValores}
                />
                <Link to="/"
                    
                    className="btn btn-primary d-block w-100"
                    onClick={validarTarea}
                >Agregar</Link>  
                         
            </form>
        </div>
    )
}
