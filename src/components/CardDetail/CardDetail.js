import { CardContent, Typography } from '@mui/material'
import Card from "@mui/material/Card";
import React, { useEffect, useState } from 'react'
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
        fetch(`https://www.breakingbadapi.com/api/characters/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setInfo(data)});
    }

    useEffect(() => {
        fetchCardDetail()
      }, []);

    const onAdd = () => {
        setShowCounter(true)
    }

    return (
        <div className="product_container">
            <Card className="card_product-info">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {info.length !== 0 && info[0].name}
                    </Typography>
                    <Box mt={4}>
                        <div class="columx2">
                            <div class="pleca2">
                                <img alt="" src={info.length !== 0 && info[0].img}></img>
                            </div>
                        </div>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h9" component="div">
                        {info.length !== 0 && info[0].nickname}
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
