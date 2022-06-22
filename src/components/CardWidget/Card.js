import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React from 'react'
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
        {
            name: "Zapatos Balenciaga",
            precio: "20.000"
        },


    ]
    return (
        <div className="product_container">
            {Products.map((card) =>{
                return (
                    <Card className="card_product-info">
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            {card.name}
                        </Typography>
                        <Typography variant="h9" component="div">
                            Precio: ${card.precio}
                        </Typography>
                    </CardContent>
                </Card>
                )
            })}
           
        </div>
    )
}
