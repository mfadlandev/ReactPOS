export default function TypeOrder({tipe, setTipe}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 mb-5">
        <select value={tipe} onChange={(e)=> setTipe(e.target.value)}
        className="rounded-3xl shadow-xl border border-black/20 px-4 py-2.5 text-sm font-bold cursor-pointer">
          <option value="Dine In" >Dine In</option>
          <option value="Take Away">Take Away</option>
        </select>
      </div>
    </>
  );
}
