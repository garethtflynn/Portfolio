import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import AboutComponent from './components/About'
// import ContactComponent from './components/Contact'
// import ProjectsComponent from './components/Projects'
// import SkillsComponent from './components/Skills'

function App() {
  return (
    <div>
      <Router basename="/Portfolio">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
