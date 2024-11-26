import React from "react";
import { Routes, Route } from "react-router-dom";

// Importa tus componentes
import Home from "/";
import FormCreateCompany from "./form/FormCreateCompany";
import FormRegisterApp from "./form/FormCreateApp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-create-company" element={<FormCreateCompany />} />
      <Route path="/form-register" element={<FormRegisterApp />} />
    </Routes>
  );
};
