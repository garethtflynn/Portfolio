import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router basename="/Portfolio">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<PortfolioPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
