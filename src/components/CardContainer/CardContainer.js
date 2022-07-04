import { useEffect, useState } from "react";
import { CardDetail } from "../CardDetail/CardDetail";


function CardContainer() {

    const [info, setInfo] = useState([])


    useEffect(() => {
        setTimeout(() => {
            fetch('data.json')
                .then((resp) => resp.json())
                .then((data) => setInfo(data));
        }, 2000);
    }, []);

   


    return (
        <div style={{ display: "flex" }}>
       
            {info && info.map((product) => {
                return (
                        <CardDetail nombre={product.nombre} imagen={product.imagen} descripcion={product.descripcion}/>
              
                )
            }
            )
            }

        </div>
    );
}

export default CardContainer;