import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { getTotalItems } from "../../helpers/calculate";
import "./styles.css";
type Props = {
  handleOpen: (state: boolean) => void;
};
const NavBar = ({ handleOpen }: Props) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Ecommerce
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="shop-cart"
            color="white"
            size="2x"
            onClick={() => handleOpen(true)}
          />

          <Badge bg="danger" className="amount-cart">
            {getTotalItems(cartItems)}
          </Badge>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
