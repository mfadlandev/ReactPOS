import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../../utils/ProductContext";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const {
    products,
    pagination,
    isLoading,
    isError,
    isFetching,
    deleteProduct,
    productParams,
    setProductParams,
    getCategories,
  } = useProducts();

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  // GET CATEGORIES

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // SEARCH DAN FILTER
  const handleSearch = () => {
    setProductParams({
      ...productParams,
      keyword: keyword,
      category_id: category,
      page: 1,
    });
  };

  // DELETE PRODUCT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus produk ini?",
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct.mutateAsync(id);
      toast.success("Produk berhasil dihapus");
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus produk.", error);
    }
  };

  // LOADING DAN ERROR
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Manajemen Produk</h1>

      <div className="mb-4">
        <Link to="/admin/add-product" className="text-blue-600 hover:underline">
          Tambah Produk
        </Link>
      </div>

      {/* SEARCH DAN FILTER */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Cari nama produk..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="border rounded px-3 py-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">Semua Kategori</option>

          {categories?.map((cat) => (
            <option key={cat.category_id} value={cat.category_id}>
              {cat.category}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Cari
        </button>
      </div>

      {/* TABEL PRODUK */}
      <div className={isFetching ? "opacity-60" : ""}>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Harga</th>
              <th className="p-2 border">Stok</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((p, index) => (
              <tr key={p.id}>
                <td className="p-2 border">
                  {(pagination?.from ?? 1) + index}
                </td>

                <td className="p-2 border">
                  <img
                    src={p.img_url}
                    alt={p.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>

                <td className="p-2 border">
                  {p.name}
                  <br />
                  <small className="text-gray-500">#{p.category?.name}</small>
                </td>

                <td className="p-2 border">Rp. {p.price}</td>

                <td className="p-2 border">{p.stock}</td>

                <td className="p-2 border space-x-2">
                  <Link
                    to={`/admin/edit-product/${p.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="cursor-pointer text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {products?.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Produk tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-4">
        <button
          disabled={pagination?.current_page <= 1 || isFetching}
          onClick={() =>
            setProductParams({
              ...productParams,
              page: productParams.page - 1,
            })
          }
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Sebelumnya
        </button>

        <span>
          Halaman {pagination?.current_page ?? 1} dari{" "}
          {pagination?.last_page ?? 1}
        </span>

        <button
          disabled={
            pagination?.current_page >= pagination?.last_page || isFetching
          }
          onClick={() =>
            setProductParams({
              ...productParams,
              page: productParams.page + 1,
            })
          }
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Berikutnya
        </button>
      </div>
    </div>
  );
}
