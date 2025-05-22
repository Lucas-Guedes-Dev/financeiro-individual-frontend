import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/about" element={<div>about</div>} />
                <Route path="/contact" element={<div>contact</div>} />
            </Routes>
        </Layout>
    );
}

export default App;