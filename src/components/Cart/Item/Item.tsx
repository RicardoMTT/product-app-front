import { Button } from "react-bootstrap";
import { PropertyAccessChain } from "typescript";
import { CartItem } from "../../../types/typeApp";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
type Props = {
  item: CartItem;
};
const Item = ({ item }: Props) => {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <div className="shopping-cart-item">
        <div>
          <Button onClick={() => dispatch({ payload: item, type: "ADD" })}>
            +
          </Button>
          <span>{item.amount}</span>
          <Button
            variant="danger"
            onClick={() => dispatch({ payload: item.id, type: "REMOVE" })}
          >
            -
          </Button>
        </div>
        <div>
          <div>
            <img
              src={item.image}
              width={120}
              height={120}
              alt="Imagen del producto"
            />
          </div>
          <div>
            <strong>Nombre:</strong>
            {item.title}
          </div>
          <div></div>
          <div>
            <strong>Precio:</strong>
            {item.price}
          </div>
          <Button
            onClick={() => dispatch({ payload: item.id, type: "REMOVE-ALL" })}
          >
            BORRAR TODO
          </Button>
        </div>
      </div>
    </>
  );
};

export default Item;
