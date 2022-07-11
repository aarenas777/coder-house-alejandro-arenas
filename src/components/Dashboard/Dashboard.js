import { useEffect, useState } from "react";
import { CardDetail } from "../CardDetail/CardDetail";
import { CardWidget } from "../CardWidget/Card";

function Dashboard() {

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
                
                        <CardDetail nombre={product.nombre} precio={product.precio} imagen={product.imagen} />
              
                )
            }
            )
            }

        </div>
    );
}

export default Dashboard;