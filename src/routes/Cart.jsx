import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartSingle from "./CartSingle";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        {cart.map((product) => (
          <CartSingle key={product.id} {...product} />
        ))}
      </Container>
    </div>
  );
};

export default Cart;
