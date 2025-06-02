import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Lacamentos from '../pages/lancamentos';
import Login from '../pages/login';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<Layout />}>
                <Route path="/" element={
                    <div>inicio</div>
                } />
                <Route path="/about" element={<div>about</div>} />
                <Route path="/contact" element={<div>contact</div>} />
                <Route path="/lancamentos" element={<Lacamentos />} />
            </Route>


        </Routes>

    );
}

export default App;