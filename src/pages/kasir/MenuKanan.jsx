import { useState } from "react";
import MenuPelanggan from "../../components/menuPelanggan";
import TipeOrder from "../../components/TipeOrder";
import Cart from "../../components/cart";
import Detail from "../../components/Detail";
import ButtonOrder from "../../components/ButtonOrder";

export default function MenuKanan() {
  const [tipe, setTipe] = useState("Dine In");
  return (
    <>
      <div className="bg-white w-2xl rounded-3xl h-218 flex flex-col p-5 shadow-xl border border-black/30">

        <MenuPelanggan tipe={tipe} />

        <TipeOrder tipe={tipe} setTipe={setTipe} />

        <Cart />

        <Detail />

        <ButtonOrder />
      </div>
    </>
  );
}
