import MenuKanan from "./MenuKanan";
import MenuKiri from "./MenuKiri";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function KasirPage() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <MenuKiri />
      <MenuKanan />
    </>
  );
}
