import './Home.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';

import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';

function Home() {
    const [loading, setLoading] = useState(true);
    const [catUno, setCatUno] = useState([]);
    const [catDos, setCatDos] = useState([]);
    const [catTres, setCatTres] = useState([]);

    useEffect(() => {
        const db = getFirestore()
        const cardsRef = collection(db, "products")
 
        const itemsHam = query(cardsRef, where("categoria", "==", "Hamburguesa"))
        getDocs(itemsHam).then((snapshot) => {
            setCatUno(snapshot.docs.map((doc) => (doc.data())))
        })

        const itemsPizza = query(cardsRef, where("categoria", "==", "Pizzas"))
        getDocs(itemsPizza).then((snapshot) => {
            setCatDos(snapshot.docs.map((doc) => (doc.data())))
        })

        const itemsPerros = query(collection(db, "products"), where("categoria", "==", "Perros"))
        getDocs(itemsPerros).then((snapshot) => {
            setCatTres(snapshot.docs.map((doc) => (doc.data())))
        })

        setLoading(false)
    }, []);

    return (
        <div className='body'>
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="colPadding">
                        <h3 className='pb-4 titulo'>Hamburguesas</h3>
                        {loading === true && <Loading />}
                        <ItemList productos={catUno} />
                    </Col>
                </Row>
                <Row>
                    <Col className="colPadding">
                        <h3 className='pb-4 titulo'>Pizzas</h3>
                        {loading === true && <Loading />}
                        <ItemList productos={catDos} />
                    </Col>
                </Row>
                <Row>
                    <Col className="colPadding">
                        <h3 className='pb-4 titulo'>Perros</h3>
                        {loading === true && <Loading />}
                        <ItemList productos={catTres} />
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Home;