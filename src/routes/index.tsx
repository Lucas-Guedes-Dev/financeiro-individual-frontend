import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import CaixasEBancos from "../pages/caixas-bancos";
import Login from "../pages/login";
import Dashboard from '../pages/dashboard';
import PrivateRoute from './privateRoute';
import FormLancamentos from '../pages/lancamentos';
import BankAccount from "../pages/bank-account";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={
                <PrivateRoute>
                    <Layout />
                </PrivateRoute>
            }>
                <Route path="/" element={
                    <div className="route-content">Início</div>
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>}
                />

                <Route path="/lancamentos/novo" element={<PrivateRoute><FormLancamentos /></PrivateRoute>} />
                <Route path="/lancamentos" element={<CaixasEBancos />} />
                <Route path="/conta-bancaria" element={<BankAccount />} />

            </Route>

        </Routes >
    );
}

export default App;
