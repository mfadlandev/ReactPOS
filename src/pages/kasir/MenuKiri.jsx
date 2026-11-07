import CardProduk from "../../components/CardProduk";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../../context/ProductContext";
import { useState } from "react";

export default function MenuKiri() {
  const {
    products,
    pagination,
    getCategories,
    productParams,
    setProductParams,
  } = useProducts();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [search, setSearch] = useState("");
  const [active, setActive] = useState("Semua Produk");

  const ProdukFilter = products.filter((item) => {
    const filterSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const filterKategori =
      active === "Semua Produk" || item.category.name === active;
    return filterSearch && filterKategori;
  });

  return (
    <>
      {/* kiri */}
      <div className="w-full bg-white rounded-3xl h-218 shadow-xl border border-black/30 p-5 flex flex-col">
        <div className="flex flex-wrap gap-2 rounded-3xl shadow-xl border border-black/20 p-3 shrink-0">
          <Navbar
            active={active === "Semua Produk"}
            onClick={() => setActive("Semua Produk")}
          ></Navbar>
          {categories?.map((item) => (
            <Navbar
              key={item.category_id}
              active={active === item.category}
              onClick={() => setActive(item.category)}
            >
              {item.category}
            </Navbar>
          ))}
        </div>

        <Search search={search} setSearch={setSearch} />

        <div className="grid grid-cols-4 mt-5 gap-5">
          {ProdukFilter.map((item) => (
            <CardProduk key={item.id} p={item} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-auto pt-6">
          <button
            disabled={!pagination?.prev_page_url}
            onClick={() =>
              setProductParams({
                ...productParams,
                page: productParams.page - 1,
              })
            }
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Sebelumnya
          </button>

          <span>
            Halaman {pagination?.current_page} dari {pagination?.last_page}
          </span>

          <button
            disabled={!pagination?.next_page_url}
            onClick={() =>
              setProductParams({
                ...productParams,
                page: productParams.page + 1,
              })
            }
            className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );
}
