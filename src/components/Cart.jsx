import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, tambahCart, kurangCart } = useContext(CartContext);

  return (
    <div className="flex-1 rounded-3xl shadow-xl border border-black/20 p-4 overflow-y-auto">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-2.5 border-b border-black/10 last:border-none"
          >
            {/* Nama & harga */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">
                {item.nama}
              </p>

              <p className="text-xs text-gray-400">
                Rp {item.harga.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Qty */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => kurangCart(item.id)}
                className="w-8 h-8 rounded-full border border-black/20 hover:bg-gray-200 font-bold"
              >
                -
              </button>

              <span className="w-8 text-center font-bold">
                {item.jumlah}
              </span>

              <button
                onClick={() => tambahCart(item)}
                className="w-8 h-8 rounded-full border border-black/20 hover:bg-gray-200 font-bold"
              >
                +
              </button>
            </div>

            {/* Total */}
            <div className="text-right w-24">
              <p className="font-bold">
                Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full flex items-center justify-center py-16">
          <p className="text-sm text-gray-400">
            Belum ada item dipilih
          </p>
        </div>
      )}
    </div>
  );
}