import React, { useState } from "react";

export function FormCreateCompany() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);  // Para mostrar que el formulario está enviando datos
  const [error, setError] = useState(null);  // Para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setError(null);  // Resetear cualquier error anterior

    try {
      // Enviar los datos al servidor
      const response = await fetch("https://api-hackaton-lwg2n6jhya-uc.a.run.app/empresas", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });

      
      if (!response.ok) {
        throw new Error("Error al registrar la empresa.");
      }

      // Si la respuesta es exitosa
      const result = await response.json();  // Suponiendo que el servidor devuelve una respuesta JSON
      console.log("Empresa registrada:", result);

      // Puedes redirigir o mostrar un mensaje de éxito, por ejemplo:
      alert("Empresa registrada exitosamente.");

      // Limpiar el formulario si es necesario
      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      // Manejar cualquier error
      console.error("Error:", error);
      setError("Hubo un problema al registrar la empresa. Intente de nuevo más tarde.");
    } finally {
      setIsLoading(false);  // Ocultar el estado de carga
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="m-4">
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

          {/* Mensaje de error */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Botón de Enviar */}
          <div className="d-flex justify-content-end mt-4">
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{
                backgroundColor: '#133D87'
              }}
              disabled={isLoading} // Deshabilitar el botón mientras se está enviando
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}