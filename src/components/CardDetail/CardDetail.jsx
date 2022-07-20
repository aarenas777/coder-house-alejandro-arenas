import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useEffect, useState } from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./CardDetail.css"
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from '@firebase/firestore';



export const CardDetail = (props) => {
    const [showCounter, setShowCounter] = useState(false)
    const [detail, setDetail] = useState([])

    const onAdd = () => {
        setShowCounter(true)
    }

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {detail.name}
                    </Typography>
                    <Box mt={4}>

                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                            {detail.description}
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
