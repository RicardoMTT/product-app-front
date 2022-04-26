import {CartContext} from '../../context/CartContext'
import {useContext} from 'react';
import {calculateTotal,getTotalItems} from '../../helpers/calculate';

const OrderSumary = () => {
    const { cartItems } = useContext(CartContext);


    return (
        <div>
            <h4>Resumen {getTotalItems(cartItems)}</h4>
            <h3>TOTAL_PRODUCTOS</h3>
            <ul>
                {
                    cartItems.map(item=>(
                        <li 
                        key={item.id}>
                            <div>
                                <h6>{item.title}</h6>
                                <h6>Cantidad: {item.amount}</h6>
                            </div>
                            <div>
                                {item.price}
                            </div>
                        </li>
                    ))
                }
                <li>
                    <span>{calculateTotal(cartItems).toFixed(2)}</span>
                </li>
            </ul>
        </div>
    );
  }
  
  export default OrderSumary;
  