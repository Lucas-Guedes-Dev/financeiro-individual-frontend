import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Dashboard from '../pages/dashboard';
import PrivateRoute from './privateRoute';
import FormLancamentos from '../pages/lancamentos';
import Login from '../pages/login';

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
                <Route path="/about" element={
                    <div className="route-content">About</div>
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>}
                />
                <Route path="/contact" element={
                    <div className="route-content">Contact</div>
                } />

                <Route path="/about" element={<div>about</div>} />
                <Route path="/contact" element={<div>contact</div>} />
                <Route path="/lancamentos/novo" element={<PrivateRoute><FormLancamentos /></PrivateRoute>} />
            </Route>


        </Routes>

    );
}

export default App;