import { ProductsData } from "../../Data/ProductsData";
import { CardWidget } from "../CardWidget/Card";

export const CardList = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>

        {props.cards.map((card) => {
          return (
            <CardWidget
              id={card.id}
              name={card.name}
              image={card.image}
              price={card.price}
              description = {card.description}
              stock={props.stock}
            />)
        })}

      </div>

    </div>
  )
}