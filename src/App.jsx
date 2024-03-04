import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gambling from "./pages/Gambling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gambling" element={<Gambling />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
