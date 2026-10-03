import { useState } from "react";


export default function MenuPelanggan({tipe}) {
  const [edit, setEdit] = useState(true);
  const [nama, setNama] = useState("Nama Pelanggan");
  return (
    <>
      <div className="rounded-3xl shadow-xl border border-black/20 p-4 mb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">{nama}</p>
            <span>{tipe}</span>
            <p className="text-xs text-gray-400">Order Number: 2</p>
          </div>
          <button
            onClick={() => setEdit(!edit)}
            className="text-sm font-bold underline cursor-pointer"
          >
            Ubah
          </button>
        </div>
        {edit && (
          <input
            type="text"
            value={nama}
            placeholder="Nama pelanggan"
            onChange={(e) => setNama(e.target.value)}
            className="w-full mt-3 bg-gray-50 border border-black/20 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        )}
      </div>
    </>
  );
}
