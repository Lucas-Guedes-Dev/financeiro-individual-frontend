import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Lacamentos from '../pages/lancamentos';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<div>inicio</div>} />
                <Route path="/about" element={<div>about</div>} />
                <Route path="/contact" element={<div>contact</div>} />
                <Route path="/lancamentos" element={<Lacamentos />} />
            </Routes>
        </Layout>
    );
}

export default App;