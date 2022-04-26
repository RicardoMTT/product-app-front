import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";

const AppEcommerce = () => {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <CartProvider>
        <Navigation handleOpen={setShow} />
        {show && <Sidebar handleClose={setShow} />}
      </CartProvider>
    </Router>
  );
};

export default AppEcommerce;
