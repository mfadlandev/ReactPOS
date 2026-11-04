import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./context/ProductContext.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <CartProvider>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </CartProvider>
        </ProductProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
