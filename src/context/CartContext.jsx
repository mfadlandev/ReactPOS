import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const tambahCart = (produk) => {
    setCart((prevCart) => {
      const produkSudahAda = prevCart.find(
        (item) => item.id === produk.id
      );

      if (produkSudahAda) {
        return prevCart.map((item) =>
          item.id === produk.id
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...produk,
          jumlah: 1,
        },
      ];
    });
  };

  const kurangCart = (id) => {
  setCart((prevCart) => {
    return prevCart
      .map((item) =>
        item.id === id
          ? { ...item, jumlah: item.jumlah - 1 }
          : item
      )
      .filter((item) => item.jumlah > 0);
  });
};

  return (
    <CartContext.Provider value={{ cart, tambahCart, kurangCart }}>
      {children}
    </CartContext.Provider>
  );
}