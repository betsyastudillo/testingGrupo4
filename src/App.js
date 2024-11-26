import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomeView } from './views/HomeView';
import { FormCreateCompany } from './form/FormCreateCompany';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <Routes>
            {/* Rutas de Contenido */}
            <Route path="/" element={HomeView()} />
            <Route path="/form-register" element={FormCreateCompany()} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
