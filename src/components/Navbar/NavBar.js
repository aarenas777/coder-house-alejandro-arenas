import './NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
     
      <div class="page">
        <nav class="page__menu page__custom-settings menu">
          <ul class="menu__list r-list">
            <li class="menu__group"><Link  to="/inicio" class="menu__link r-link text-underlined">Home</Link></li>
            <li class="menu__group"><Link to='/productos' class="menu__link r-link text-underlined">Productos</Link></li>
            <li class="menu__group"><Link to='/categoria/Hamburguesa' class="menu__link r-link text-underlined">Hamburguesas</Link></li>
            <li class="menu__group"><Link to='/categoria/Pizzas'class="menu__link r-link text-underlined">Pizzas</Link></li>
            <li class="menu__group"><Link to='/categoria/Perros' class="menu__link r-link text-underlined">Perros</Link></li>
            <div className="menu__cart">
          <CartWidget/>
          </div>
          </ul>
          
        </nav>
      </div>
    
      </>
  );
}

export default NavBar;
