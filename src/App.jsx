import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import KasirPages from "./pages/kasir/KasirPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AboutPage from "./pages/adminpages/AboutPage";
import KategoriPage from "./pages/adminpages/KategoriPage";
import ProdukPage from "./pages/adminpages/ProdukPage";
import TransaksiPage from "./pages/adminpages/TransaksiPage";
import ProductForm from "./pages/adminpages/ProductForm";
import ProductEdit from "./pages/adminpages/ProductEdit";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<KasirPages />}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          {/* Default route di dalam AdminLayout */}
          {/* mapping path ke component page, gunakan autocompletion */}
          <Route index element={<AdminDashboard />} />
          <Route path="add-product" element={<ProductForm />} />
          <Route path="edit-product/:id" element={<ProductEdit />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="Kategori" element={<KategoriPage />} />
          <Route path="Produk" element={<ProdukPage />} />
          <Route path="Transaksi" element={<TransaksiPage />} />
        </Route>
      </Routes>
    </>
  );
}
