import { CardDetail } from "../CardDetail/CardDetail";
import { CardWidget } from "../CardWidget/Card";

export const CardList = (props) => {
    return (
      <div style={{display:"flex"}}>

        {props.cards.map((card) => {
            return( 
            <CardWidget
                id={card.id}
                nombre={card.nombre}
                imagen={card.imagen}
                precio={card.precio}
            ></CardWidget>)
        } )}

      </div>
    )
  }