import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CardProduk({p}) {
  const {tambahCart} = useContext(CartContext);

  function formatRupiah(harga) {
  return harga.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  });
}

  return (
    <>
      <button onClick={() => tambahCart(p)} className="text-left rounded-3xl shadow-xl border border-black/20 p-3 hover:bg-gray-200 transition cursor-pointer">
        <div className="w-full h-40 rounded-2xl bg-gray-100 overflow-hidden mb-3">
          <img
            src={p.img}
            alt="mantap"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm font-bold truncate mt-2">{p.nama}</p>
        <div className="flex justify-between items-end mt-2">
          <div className="flex flex-col text-xs gap-1">
            <span className="border border-black/20 rounded-full px-2 py-1 w-fit">
              {p.kategori}
            </span>
            <span className="border border-black/20 rounded-full px-2 py-1 w-fit">
              Stok {p.stok}
            </span>
          </div>

          <span className="font-bold text-base">{formatRupiah(p.harga)}</span>
        </div>
      </button>
    </>
  );
}
