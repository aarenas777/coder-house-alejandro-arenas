import "./Modal.css";

import { Col, Container, Row } from 'react-bootstrap';
import { Form, Modal } from 'react-bootstrap';
import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';

import CartContext from '../../store/cart-context';
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';



function ModalFinalizar(props) {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [datos, setDatos] = useState(false);
    const { itemsCarrito, clearCart } = useContext(CartContext);
    const [nroOrden, setNroOrden] = useState("0");

    let suma = 0;
    itemsCarrito.map(i => suma = (suma + (parseInt(i.item.precio) * parseInt(i.quality))));

    const db = getFirestore();

    const finalizarCompra = () => {
        const arrayCompra = {
            "buyer": {
                "name": nombre,
                "phone": telefono,
                "email": email
            },
            "items": itemsCarrito,
            "date": Date.now(),
            "total": suma
        };
        try {
            addDoc(collection(db, "orders"), arrayCompra)
                .then(({ id }) => setNroOrden(id))

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        clearCart();

        setDatos(!datos);
    }




    return (
        /* <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { datos === false ?
                <Form>
                    <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control type="text" placeholder="Coloque su nombre y apellido" onChange={ (event) => setNombre(event.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Coloque su email" onChange={ (event) => setEmail(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Coloque su teléfono" onChange={ (event) => setTelefono(event.target.value) } />
                    </Form.Group>
                    
                </Form>
                : 
                <Container>
                    <Row>
                        <Col>
                            <p className="mensajeFinal" >Gracias por tu compra, a la brevedad nos comunicaremos contigo. </p>
                            <h4>Tú número de orden es: <strong style={{color:" #876445"}}>{nroOrden}</strong></h4>
                        </Col>
                    </Row>
                </Container>
                
                }
            </Modal.Body>
            <Modal.Footer>
            { datos === false ?<Link to="#" className="btn btn-lg buttonAccent float-end" onClick={finalizarCompra}> Terminar compra</Link>
            : <Link to="#" className="btn btn-lg buttonAccent float-end" onClick={props.handleClose}>Cerrar</Link>  }
            </Modal.Footer>
        </Modal> */
        <div>

            <Dialog
                open={props.show}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
            >
                <section onClick={props.handleClose} className="close_button">
                    <CancelIcon />
                </section>
                <DialogTitle>{"Finalizar compra"}</DialogTitle>
                <DialogContent>
                    {datos === false ?
                        <Form>
                            <Form.Group className="mb-3" controlId="Nombre">
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control type="text" placeholder="Coloque su nombre y apellido" onChange={(event) => setNombre(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Coloque su email" onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Telefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="Coloque su teléfono" onChange={(event) => setTelefono(event.target.value)} />
                            </Form.Group>

                        </Form>
                        :
                        <Container>
                            <Row>
                                <Col>
                                    <p className="mensajeFinal" >Gracias por tu compra, a la brevedad nos comunicaremos contigo. </p>
                                    <h4>Tú número de orden es: <strong style={{ color: " #876445" }}>{nroOrden}</strong></h4>
                                </Col>
                            </Row>
                        </Container>

                    }
                </DialogContent>
                <DialogActions>
                    {datos === false ? <Link to="#" className="btn btn-lg buttonAccent float-end" onClick={finalizarCompra}> Terminar compra</Link>
                        : <Link to="#" className="btn btn-lg buttonAccent float-end" onClick={props.handleClose}>Cerrar</Link>}
                </DialogActions>
            </Dialog>
        </div>

    );
};
export default ModalFinalizar;