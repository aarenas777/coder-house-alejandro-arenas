import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useEffect, useState } from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./CardDetail.css"
import { Link } from 'react-router-dom';



export const CardDetail = (props) => {
    const [showCounter, setShowCounter] = useState(false)

    const onAdd = () => {
        setShowCounter(true)
    }
    useEffect(() => {
        console.log(props);
      }, []);

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {props.name}
                    </Typography>
                    <Box mt={4}>

                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            {props.description}
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
