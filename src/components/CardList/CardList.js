import { CardDetail } from "../CardDetail/CardDetail";
import { CardWidget } from "../CardWidget/Card";

export const CardList = (props) => {
    return (
      <div style={{display:"flex"}}>

        {props.cards.map((card) => {
            return( 
            <CardWidget
                id={card.char_id}
                name={card.name}
                img={card.img}
                nickname={card.nickname}
            ></CardWidget>)
        } )}

      </div>
    )
  }