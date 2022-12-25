import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Following from './pages/Following';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
