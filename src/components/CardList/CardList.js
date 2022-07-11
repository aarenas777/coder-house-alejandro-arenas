import { CardDetail } from "../CardDetail/CardDetail";
import { CardWidget } from "../CardWidget/Card";

export const CardList = (props) => {
    return (
      <div>

        {props.cards.map((card) => {
            return( 
            <CardDetail
                id={card.id}
                imagen={card.imagen}
                nombre={card.nombre}
                descripcion={card.descripcion}
            ></CardDetail>)
        } )}

      </div>
    )
  }