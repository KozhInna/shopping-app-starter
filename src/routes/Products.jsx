import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  // const products = useSelector((state) => state.product.products)
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr",
        row: "1rem",
        padding: "1rem",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <h1>Products</h1>
    </div>
  );
};
export default Products;
