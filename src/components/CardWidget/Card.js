import { Button, CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useContext, useState } from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./Card.css"
import { Link } from 'react-router-dom';
import {CartContext} from "../../context/CartContext"




export const CardWidget = (props) => {

    const {addToCart} = useContext(CartContext)
    const [showCounter, setShowCounter] = useState(false)

    const onAdd = (count) => {
        setShowCounter(true)
        
    }

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {props.nombre}
                    </Typography>
                    <Box mt={4}>
                        <div class="columx2">
                            <div class="pleca2">
                                <img alt="" src={props.imagen}></img>
                            </div>
                        </div>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            Precio: ${props.precio}
                        </Typography>
                    </Box>
                    <Box mt={5}>
                    {showCounter ? (
                            <Link to="/cart">
                                Ir a mi carrito
                            </Link>
                        ) : (
                            <Contador onAdd={onAdd} />
                        )}
                    </Box>
                    <Box marginLeft="11%" mt={2}>
                         <Link to={`/products/${props.id}`}>Ver detalle del producto</Link> 
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
