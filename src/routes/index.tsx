import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import CaixasEBancos from "../pages/caixas-bancos";
import Login from "../pages/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={<div>inicio</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={<div>contact</div>} />

        <Route path="/lancamentos" element={<CaixasEBancos />} />
      </Route>
    </Routes>
  );
}

export default App;
