import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomeView } from './views/HomeView';
import { FormCreateCompany } from './form/FormCreateCompany';
import { Footer } from "./components/Footer";
import { ReviewCompany } from "./views/ReviewCompany";
import { CompanyProvider } from "./CompanyContext";

function App() {
  return (
    <CompanyProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container-fluid">
            <Routes>
              {/* Rutas de Contenido */}
              <Route path="/" element={<HomeView />} />
              <Route path="/form-register" element={<FormCreateCompany />} />
              <Route path="/review-company/:id" element={<ReviewCompany />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </CompanyProvider>
  );
}


export default App;
