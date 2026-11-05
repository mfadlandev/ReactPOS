import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../../context/ProductContext";

export default function AdminDashboard() {
  const { getCategories } = useProducts();

  // GET CATEGORIES
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading kategori...</p>;
  if (isError) return <p>Error loading categories.</p>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Manajemen Kategori</h1>

      {/* TOMBOL TAMBAH */}
      <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Tambah Kategori
        </button>
      </div>

      {/* TABEL KATEGORI */}
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">No</th>
            <th className="p-2 border">Nama Kategori</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {categories?.map((cat, index) => (
            <tr key={cat.category_id}>
              <td className="p-2 border">{index + 1}</td>

              <td className="p-2 border">{cat.category}</td>

              <td className="p-2 border space-x-2">
                <button className="text-blue-600 hover:underline">
                  Edit
                </button>

                <button className="text-red-600 hover:underline">
                  Hapus
                </button>
              </td>
            </tr>
          ))}

          {categories?.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                Kategori tidak ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}