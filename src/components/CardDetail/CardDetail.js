import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useState } from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./CardDetail.css"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export const CardDetail = (props) => {
    const params = useParams()
    const [info, setInfo] = useState([])
    const [showCounter, setShowCounter] = useState(false)
    const fetchCardDetail = () => {
        fetch(`data.json/${params.id}`)
            .then((resp) => resp.json())
            .then((data) => setInfo(data));
    }
    const onAdd = () => {
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
                            {props.descripcion}
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        {showCounter ? (
                            <Link to="/cart">
                                Ir a mi carrito
                            </Link>
                        ) : (
                        <Contador onAdd={onAdd} />
                        )}
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
