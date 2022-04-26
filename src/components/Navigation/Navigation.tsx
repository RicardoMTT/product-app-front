import { Route, Routes } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
import Home from "../../pages/Home/Home";
import NavBar from "../NavBar/NavBar";
type Props = {
    handleOpen:(state:boolean)=>void
}
const Navigation = ({handleOpen}:Props) => {
    return (
        <>
            <NavBar handleOpen={handleOpen}/>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/checkout" element={<Checkout/>} />
            </Routes>
        </>
    );
  }
  
  export default Navigation;
  