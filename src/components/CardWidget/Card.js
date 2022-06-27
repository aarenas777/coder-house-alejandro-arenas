import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';

import './Card.css';


export const CardWidget = ({ name }) => {
    const Products = [
        {
            name: "Zapatos Nike",
            precio: "10.000"
        },
        {
            name: "Zapatos Jordan",
            precio: "18.000"
        },
        {
            name: "Zapatos Adidas",
            precio: "19.000"
        },
        {
            name: "Zapatos Puma",
            precio: "17.000"
        },



    ]
    return (
        <div className="product_container">
            {Products.map((card) => {
                return (
                    <Card className="card_product-info">
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {card.name}
                            </Typography>
                            <Box mt={16}>
                                <Typography variant="h9" component="div">
                                    Precio: ${card.precio}
                                </Typography>
                            </Box>
                            <Box mt={5} mr={2}>
                                <Contador />
                            </Box>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    )
}
