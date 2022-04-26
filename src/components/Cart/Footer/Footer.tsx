import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { calculateTotal } from "../../../helpers/calculate";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div>
        <strong>Total:</strong>
        {calculateTotal(cartItems)}
      </div>
      <div>
        <NavLink className="navbar-brand" to="/checkout">
          Proceder con el pago
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
