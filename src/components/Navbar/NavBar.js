import './NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      {/* <Container>
        <Row>
          <Col xs={5} className='menu'>
            <ul class="nav nav-pills">
              <li class="nav-item"><NavLink activeClassName='active' to='/inicio'>Inicio</NavLink></li>
              <li class="nav-item">
               
                <ul class="dropdown-menu">
                  <li><NavLink className='dropdown-item' to='/productos'>Todos</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Hamburguesa'>Hamburguesas</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Pizzas'>Pizzas</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Perros'>Perros</NavLink></li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={6} className="navbar_title">
              Magma alimentos
          </Col>
          <Col>
            <CartWidget/>
          </Col>
        </Row>
      </Container> */}
      <div class="page">
        <nav class="page__menu page__custom-settings menu">
          <ul class="menu__list r-list">
            <li class="menu__group"><a href="/inicio" class="menu__link r-link text-underlined">Home</a></li>
            <li class="menu__group"><a href='/productos' class="menu__link r-link text-underlined">Productos</a></li>
            <li class="menu__group"><a href='/categoria/Hamburguesa' class="menu__link r-link text-underlined">Pizzas</a></li>
            <li class="menu__group"><a href='/categoria/Pizzas'class="menu__link r-link text-underlined">Hamburguesas</a></li>
            <li class="menu__group"><a href='/categoria/Perros' class="menu__link r-link text-underlined">Perros</a></li>
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
