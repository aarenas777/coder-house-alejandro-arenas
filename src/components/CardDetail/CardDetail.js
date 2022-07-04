import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React from 'react'
import { Contador } from "../Contador/Contador"
import Box from '@mui/material/Box';
import "./CardDetail.css"


export const CardDetail = (props) => {

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {props.nombre}
                    </Typography>
                    <Box mt={4}>
                        <div  class="columx2">
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
                </CardContent>
            </Card>
        </div>
    )
}