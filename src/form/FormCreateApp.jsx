import React, {useState} from "react"


export function FormCreateApp() {
  const [formData, setFormData] = useState({
    name: "",
    urlImage: "",
    numVist: 0,
    score: 0,
    review: "",
    category: "",
    companyEmail: ""
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
        <h2 className="mb-5 text-center">Formulario de Registro Aplicaciones</h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label mb-3">
              Nombre de la Aplicacion
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
              Categoria
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
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