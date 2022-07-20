import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useEffect, useState } from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./Card.css"
import { Link } from 'react-router-dom';




export const CardWidget = (props) => {

    const [showCounter, setShowCounter] = useState(false)

    const onAdd = (count) => {
        setShowCounter(true)

    }

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {props.name}
                    </Typography>
                    <Box mt={4}>
                        <div class="columx2">
                            <div class="pleca2">
                                <img alt="" src={props.image}></img>
                            </div>
                        </div>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            $ - {props.price}
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            {props.description}
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            {props.stock}
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
                        <Link to={`/products/${props.id}`} onClick={() => { console.log(props) }}>Ver detalle del producto</Link>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
