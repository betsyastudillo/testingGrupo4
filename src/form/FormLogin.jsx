import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("AuthUser", formData);
    //alert("Inicio de Sesion Exitoso");
    window.location.href = "/";
    console.log("Form submitted:", formData);
  };

  return (
    <div className="row d-flex justify-content-center">
        <form onSubmit={handleSubmit}>

          {/* Correo Electrónico */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label mb-3">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ maxWidth: "500px" }}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label mb-3">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ maxWidth: "500px" }}
              required
            />
          </div>

          {/* Botón de Iniciar Sesion */}
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#133D87",
              }}
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
    </div>
  );
}
