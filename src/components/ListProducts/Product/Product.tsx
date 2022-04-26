import { Button, Card } from "react-bootstrap";
import { ProductItem } from "../../../types/typeApp";
import "./styles.css";
type Props = {
  product: ProductItem;
  handleAddToCart: (product: ProductItem) => void;
};
const Product = ({ product, handleAddToCart }: Props) => {
  return (
    <Card style={{ width: "20rem", margin: "5px" }}>
      <Card.Img variant="top" src={product.image} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title" style={{ height: "40px" }}>
          {product.title}
        </Card.Title>
        <Card.Text className="card-description" style={{ height: "70px" }}>
          {product.description}
        </Card.Text>
        <Card.Text className="card-price">Precio: {product.price}</Card.Text>

        <Button variant="primary" onClick={() => handleAddToCart(product)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
