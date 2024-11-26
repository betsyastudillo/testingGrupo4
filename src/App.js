import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomeView } from './views/HomeView';
import { FormCreateCompany } from './form/FormCreateCompany';
import { ReviewCompany } from "./views/ReviewCompany";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <Routes>
            {/* Rutas de Contenido */}
            <Route path="/" element={HomeView()} />
            <Route path="/login" element={FormCreateCompany()} />
            <Route path="/review-company" element={ReviewCompany()} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
