import { useEffect, useState } from "react";

import { CardList } from "../CardList/CardList"


function CardContainer() {


    const [info, setInfo] = useState([])

    useEffect(() => {

        fetch('https://www.breakingbadapi.com/api/characters')
            .then((resp) => resp.json())
            .then((data) => setInfo(data));
    }, []);




    return (
        <div style={{ display: "flex" }}>
            <CardList style={{ display: "flex" }} cards={info}></CardList>
        </div>
    );
}

export default CardContainer;