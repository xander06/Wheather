import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sports from "./pages/Sports";
import Clima from "./pages/Clima";

function App() {
  const footerinfo = {
    nombre: "© Kruger Corp. 2022. Transforming Enterprises, Boosting Lives.",
  };
  return (
    <div className="container">
      <Router>
        <div className="nav-tittle">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Clima />} />
          
        </Routes>
        <Footer {...footerinfo} />
      </Router>
    </div>
  );
}

export default App;
