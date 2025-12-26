import { useCart } from "../context/CartContext";

export default function AddToCartBar({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="add-to-cart-bar">
      <button onClick={() => addToCart(product)}>
        ADD TO CART
      </button>
      <button className="buy">BUY NOW</button>
    </div>
  );
}
