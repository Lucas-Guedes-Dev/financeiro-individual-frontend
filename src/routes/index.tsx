import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Lacamentos from '../pages/lancamentos';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import PrivateRoute from './privateRoute';

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
                <Route path="/lancamentos" element={<PrivateRoute>
                    <Lacamentos />
                </PrivateRoute>} />
            </Route>


        </Routes>

    );
}

export default App;