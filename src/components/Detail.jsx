export default function Detail() {
  return (
    <>
      <div className="rounded-3xl shadow-xl border border-black/20 p-4 mt-5">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Subtotal</span>
          <span>Rp. 0</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>Pajak 10%</span>
          <span>Rp. 0</span>
        </div>
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-black/10">
          <span className="font-bold">TOTAL</span>
          <span className="text-lg font-bold">Rp. 0</span>
        </div>
      </div>
    </>
  );
}
