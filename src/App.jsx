import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchPage from "./pages/LaunchPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Launches" element={<LaunchPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;