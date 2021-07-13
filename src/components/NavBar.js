import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="nav">
            <h2 className="titulo">App Lista de Tareas</h2>
            <NavLink exact activeClassName="activo" to="/" className="link">Tareas</NavLink>
            <NavLink exact activeClassName="activo" to="/formulario" className="link">Ingresar Tarea</NavLink>
        </div>
    )
}
