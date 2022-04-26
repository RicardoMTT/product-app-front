import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Footer from "./Footer/Footer";
import Item from "./Item/Item";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  if(!cartItems.length) return <h1>Vacio</h1>
  return (
    <div>
      {cartItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Footer/>
    </div>
  );
};

export default Cart;
