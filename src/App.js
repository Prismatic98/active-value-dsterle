import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import References from "./pages/References";

function App() {
  return (
    <div className="app">
      <Router basename="/Klima-App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/referenzen" element={<References />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
