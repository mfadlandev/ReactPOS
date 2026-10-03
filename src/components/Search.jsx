export default function Search({search, setSearch}) {
  return (
    <div className="mt-5 shrink-0">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari Produk...."
        className="w-full bg-gray-50 border border-black/30 rounded-full py-3 px-5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
