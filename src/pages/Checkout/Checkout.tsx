import {Container,Row} from 'react-bootstrap';
import Form from '../../components/Form/Form';
import OrderSumary from '../../components/OrderSummary/Form';

const Checkout = () => {
    return (
        <Container>
          <div className="py-5 text-center">
            <h2>Ultimo paso</h2>
            <p className="lead">Para finalizar el pago ,completa el siguiente formulario.</p>
          </div>
          <Row>
            <Form/>
            <OrderSumary/>
          </Row>
        </Container>
    );
  }
  
  export default Checkout;
  