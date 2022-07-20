import { useEffect, useState } from "react";

import { CardList } from "../CardList/CardList"
import  { getFirestore, getDocs, collection} from "firebase/firestore"


function CardContainer() {


    const [info, setInfo] = useState([])


    //TODO: Usar mas productos en firebase

    //Para un solo pdcto
 /*    useEffect(() => {
        const db = getFirestore()
        const  cardRef = doc( db, "products", "AnJMlpmlpGmAsnZslqeg"  )
        getDoc( cardRef ).then( (snapshot) =>{
            if( snapshot.exists() ) {
                setInfo( [snapshot.data()] )
            }
        } )
    }, []); */

    //Para los pdctos de la coleccion
    useEffect(() => {
        const db = getFirestore()
        const  cardsRef = collection( db, "products" )
        getDocs( cardsRef ).then( (snapshot) =>{
                setInfo( snapshot.docs.map((doc) => doc.data()) )
            
        } )
       
    }, []);




    return (
        <div style={{ display: "flex" }}>
            <CardList style={{ display: "flex" }} cards={info}></CardList>
        </div>
    );
}

export default CardContainer;