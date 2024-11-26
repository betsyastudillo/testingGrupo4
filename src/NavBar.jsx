import { useState } from 'react'
import './NavBar.css'

export function NavBar() {

  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };


  return (
    <nav
      className="mb-3 navbar navbar-expand-lg border-none" style={{backgroundColor: '#fff'}}>
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img 
            className="img-fluid"
            src="https://i.postimg.cc/W3598G1n/Imagen3.png" 
            width="50" />
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
              <a
                className="nav-link"
                href="/"
              >
                Apps
              </a>
            </li>
          </ul>

          <h3 class="me-4" onClick={toggleBuscador} style={{cursor: 'pointer', fontSize: '20px'}}><i class="bi bi-search"></i></h3>
          {mostrarBuscador && (
            <input
              type="text"
              className = "form-control me-4"
              placeholder = "Buscar..."
              style={{maxWidth: '300px'}}
            />
          )}
          <h3 class="me-4" style={{fontSize: '20px'}}><i class="bi bi-info-circle"></i></h3>
          <img
                src="https://tairo.cssninja.io/img/avatars/10.svg"
                class="rounded-circle border"
                width="40"
                alt="Avatar 3"
              />
        </div>
      </div>
    </nav>
  )
}