import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import KasirPages from "./pages/kasir/KasirPage";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={< MainLayout />}>
          <Route index element={<KasirPages />}></Route>
          <Route path="admin" element={<div>Coming Soon</div>}></Route>
        </Route>
      </Routes>
    </>
  )
}

