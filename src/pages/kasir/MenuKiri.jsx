import CardProduk from "../../components/CardProduk";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { Produk } from "../../utils/data";
import { useState } from "react";

export default function MenuKiri() {
  const [active, setActive] = useState("Semua Produk");
  return (
    <>
      {/* kiri */}
      <div className="w-full bg-white rounded-3xl h-218 shadow-xl border border-black/30 p-5">
        <div className="flex flex-wrap gap-2 rounded-3xl shadow-xl border border-black/20 p-3 shrink-0">
          <Navbar
            active={active === "Semua Produk"}
            onClick={() => setActive("Semua Produk")}
          ></Navbar>
          {Produk.map((item) => (
            <Navbar
              key={item.id}
              active={active === item.kategori}
              onClick={() => setActive(item.kategori)}
            >
              {item.kategori}
            </Navbar>
          ))}
        </div>

        <Search />

        <div className="grid grid-cols-4 mt-5 gap-5">
          {Produk.map((item) => (
            <CardProduk key={item.id} p={item} />
          ))}
        </div>
      </div>
    </>
  );
}
