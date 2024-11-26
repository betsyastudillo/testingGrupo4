import { useState } from 'react'
import { AuthUser } from "./AuthUser"

export function NavBar() {

  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };

  // function modalLogin({is}) {
  //   if (!isOpen) return null;

  // }

  return (
    <div>
      <nav
        className="mb-3 navbar navbar-expand-lg border-none"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              className="img-logo"
              src="https://i.postimg.cc/W3598G1n/Imagen3.png"
              width="50"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Juegos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Apps
                </a>
              </li>
            </ul>

            <h3
              className="me-4"
              onClick={toggleBuscador}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
              <i className="bi bi-search"></i>
            </h3>
            {mostrarBuscador && (
              <input
                type="text"
                className="form-control me-4"
                placeholder="Buscar..."
                style={{ maxWidth: "300px" }}
              />
            )}
            <h3 className="me-4" style={{ fontSize: "20px" }}>
              <i className="bi bi-info-circle"></i>
            </h3>
            <img
              src="https://tairo.cssninja.io/img/avatars/10.svg"
              className="rounded-circle border"
              width="40"
              alt="Avatar 3"
            />
            <button
              className="btn btn-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              style={{
                backgroundColor: '#133D87',
                marginRight: '10px'
              }}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
      {AuthUser()}
    </div>
  );
}