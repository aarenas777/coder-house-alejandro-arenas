import './ItemList.css';

import { Container, Row } from 'react-bootstrap';

import Item from '../Item/Item';
import React from 'react';

function ItemList(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productos.map(
                        i => <Item key={i.id} nombre={i.nombre} precio={i.precio} categoria={i.categoria} stock={i.stock} descripcion={i.descripcion} imagen={i.imagen}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemList;