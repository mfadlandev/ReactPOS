export default function Navbar({children = "Semua Produk", active, onClick}) {
  return (
    <>
      <button onClick={onClick}      
      className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition cursor-pointer ${active ? "bg-black text-white hover:bg-gray-950" : "bg-white"} border border-black/20 hover:bg-gray-100`}>
        {children}
      </button>
    </>
  );
}
