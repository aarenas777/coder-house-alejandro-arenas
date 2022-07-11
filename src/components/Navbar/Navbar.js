import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="navbar-inicio">
        <span className="navbar-inicio_span">
          <Link to="/">
            Inicio
          </Link>
        </span>
      </div>

      <div className="navbar-productos">
        <span className="navbar-productos_span">
          <Link to="/products">
            Productos
          </Link>
        </span>
      </div>

      <div className="navbar-descripcion">
        <span className="navbar-descripcion_span">
          <Link to="/">
            ¿Quiénes somos?
          </Link>
        </span>
      </div>
      <div className="navbar_car-icon">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>

    </div>
  )
}
