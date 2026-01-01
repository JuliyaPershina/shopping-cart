import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import ButtomsPlusMinus from './ButtomsPlusMinus';

console.log(ButtomsPlusMinus);

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  const toggleDropDown = () => {
    if (!cart.length) return;
    setShowDropDown((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 text-white p-4 mb-8 rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">Shopping Cart</h1>

        <div className="relative">
          {/* CART BUTTON */}
          <button
            onClick={toggleDropDown}
            className="relative p-2 rounded-full hover:bg-gray-700 transition"
          >
            <FaShoppingCart className="text-2xl" />

            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* DROPDOWN */}
          {showDropDown && cart.length > 0 && (
            <div className="absolute right-0 mt-3 w-80 bg-white text-gray-800 rounded-2xl shadow-xl z-20 animate-fadeIn">
              {/* ITEMS */}
              <ul className="max-h-64 overflow-y-auto divide-y">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>

                    <ButtomsPlusMinus product={item} />

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>

              {/* FOOTER */}
              <div className="p-4 border-t">
                <div className="flex justify-between font-semibold mb-4">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>

                <button
                  onClick={() => {
                    clearCart();
                    setShowDropDown(false);
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
