import React, { useState } from "react";

export function FormCreateCompany() {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <card className="m-4">
        <h2 className="mb-5 text-center">Formulario de Registro Empresas</h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label mb-3">
              Nombre de la empresa
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ maxWidth: '500px'}}
              required
            />
          </div>

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
              style={{ maxWidth: '500px'}}
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
              style={{ maxWidth: '500px'}}
              required
            />
          </div>

          {/* Botón de Enviar */}
          <div className="d-flex justify-content-end mt-4">
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{
                backgroundColor: '#133D87'
              }}>
              Enviar
            </button>
          </div>
        </form>
      </card>
    </div>
  );
}