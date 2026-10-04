import CardProduk from "../../components/CardProduk";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { Produk } from "../../utils/data";
import { useState } from "react";

export default function MenuKiri() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("Semua Produk");
  // const [currentPage, setCurrentpage] = useState(1);
  // const produkPerPage = 8;

  // const indexLastProduk = currentPage * produkPerPage;
  // const indexFirtProduk = indexLastProduk - produkPerPage;

  // const currentProduk = Produk.slice(
  //   indexFirtProduk,
  //   indexLastProduk
  // );

  const ProdukFilter = Produk.filter((item) => {
    const filterSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const filterKategori =
      active === "Semua Produk" || item.kategori === active;
    return filterSearch && filterKategori;
  });
  
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

        <Search search={search} setSearch={setSearch} />

        <div className="grid grid-cols-4 mt-5 gap-5">
          {ProdukFilter.map((item) => (
            <CardProduk key={item.id} p={item} />
          ))}
        </div>
      </div>
    </>
  );
}
