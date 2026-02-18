import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Backpacking from './pages/Backpacking';
import Resume from './pages/Resume';
import Writings from './pages/Writings';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/backpacking" element={<Backpacking />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>

  );
}

export default App;
