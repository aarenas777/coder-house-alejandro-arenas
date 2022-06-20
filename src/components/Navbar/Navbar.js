import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="navbar-inicio">
        <span className="navbar-inicio_span">
            Inicio
        </span>
      </div>

      <div className="navbar-productos">
        <span className="navbar-productos_span">
            Productos
        </span>
      </div>

      <div className="navbar-descripcion">
        <span className="navbar-descripcion_span">
            ¿Quiénes somos?
        </span>
      </div>
      
    </div>
  )
}
