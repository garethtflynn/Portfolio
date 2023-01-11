import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
