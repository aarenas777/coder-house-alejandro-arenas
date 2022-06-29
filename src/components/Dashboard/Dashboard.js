import { useEffect, useState } from "react";
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
                
                        <CardWidget nombre={product.nombre} precio={product.precio} imagen={product.imagen} />
              
                )
            }
            )
            }

        </div>
    );
}

export default Dashboard;