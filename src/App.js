import Navbar from './components/Navbar'
import './App.css';
//import Dashboard from './pages/Dashboard';
import AjouterArticle from './pages/article/AjouterArticle';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/* Barre de navigation (toujours visible) */}
      <nav>
        <Link to="/">Accueil</Link>
        
        <Link to="/Dashboard">Dashboard</Link>
      </nav>

      {/* Le contenu qui change selon l'URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/Dashboard" element={<Dashboard />} />
        
        {/* Route 404 - Si l'URL n'existe pas */}
        <Route path="*" element={<h1>Page non trouvée !</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
