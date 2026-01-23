import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { FormNome } from "../components/FormNome";
import { FormUsuario } from "../components/FormUsuario";
import { CadastroProduto } from "../pages/CadastroProduto";
import { LoginSystem } from "../pages/Login";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginSystem />} />
        <Route path="/cad-nome" element={<FormNome />} />
        <Route path="/cad-usuario" element={<FormUsuario />} />
        <Route path="/cad-produto" element={<CadastroProduto />} />
      </Routes>
    </>
  );
}
