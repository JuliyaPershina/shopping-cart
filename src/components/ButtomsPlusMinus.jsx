import { useCart } from "../context/CartContext";

const ButtomsPlusMinus = ({ product }) => {
  const { addToCart, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => decreaseQuantity(product.id)}
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        −
      </button>

      <span className="font-semibold">{product.quantity}</span>

      <button
        onClick={() => addToCart(product)}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        +
      </button>
    </div>
  );
}; 

export default ButtomsPlusMinus;