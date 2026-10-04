import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ButtonOrder() {
  const { cart } = useContext(CartContext);

  const cartKosong = cart.length === 0;

  return (
    <button
      disabled={cartKosong}
      className="mt-5 rounded-3xl shadow-xl border border-black/20 py-3.5 font-bold hover:bg-gray-200 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Place Order
    </button>
  );
}