import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Detail() {
  const { cart } = useContext(CartContext);

  // Hitung subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  // Pajak 10%
  const pajak = subtotal * 0.1;

  // Total
  const total = subtotal + pajak;

  // Format rupiah
  const formatRupiah = (angka) => {
    return angka.toLocaleString("id-ID");
  };

  return (
    <div className="rounded-3xl shadow-xl border border-black/20 p-4 mt-5">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Subtotal</span>
        <span>Rp. {formatRupiah(subtotal)}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>Pajak 10%</span>
        <span>Rp. {formatRupiah(pajak)}</span>
      </div>

      <div className="flex justify-between items-center mt-2 pt-2 border-t border-black/10">
        <span className="font-bold">TOTAL</span>

        <span className="text-lg font-bold">
          Rp. {formatRupiah(total)}
        </span>
      </div>
    </div>
  );
}