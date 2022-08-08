import './ItemDetailContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';

import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';

function ItemDetailContainer() {
  const [ loading, setLoading ] = useState(true);
  const [ producto, setProducto ] = useState([]);
  const params = useParams();
  let titulo =params.productName.replace("-", " ")

  const db = getFirestore();
  
  useEffect( () =>{
    const cardsRef = collection(db, "products")
    const itemsProductos = query(cardsRef, where ( "nombre", "==", titulo ))
    getDocs(itemsProductos).then((snapshot) => {
        setProducto(snapshot.docs.map((doc) => (doc.data())))
    })

  setLoading(false) 
  }, [titulo] );

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                     { loading === true && <Loading />}
                     { producto.length !== 0 && <ItemDetail productoDetalle={producto} /> }  
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}


export default ItemDetailContainer;