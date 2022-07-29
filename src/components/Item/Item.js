import './Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Item(props) {
    return (
        <Col className="col-4 pb-4" >
            <Link to={`/producto/${props.nombre}`}>
                <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"#876445"}}>
                    <CardHeader
                        style={{ color: "white" }} 
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon style={{ color: "white" }} />
                            </IconButton>
                        }
                        title={props.nombre}
                        
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.imagen}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography style={{color: "white"}} variant="body1" color="text.secondary">
                            {props.categoria}
                        </Typography>
                        <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                            $ - {props.precio}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon style={{color: "white"}} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon style={{color: "white"}} />
                        </IconButton>
                    </CardActions>

                </Card>


            </Link>
        </Col>

    );
}

export default Item;