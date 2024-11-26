import { useNavigate } from "react-router-dom";

export function AuthUser() {
  const navigate = useNavigate();


  const handleRedirect = () => {
    navigate("/form-register");
  }
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex justify-content-start">
              <img
                className="img-logo me-3"
                src="https://i.postimg.cc/W3598G1n/Imagen3.png"
                width="50"
                alt="logo"
              />
              <h5 className="modal-title">Iniciar sesión</h5>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-12">
                  <label>Usuario</label>
                  <input className="form-control" type="text"></input>
                </div>
                <div className="col-12">
                  <label>Contraseña</label>
                  <input className="form-control" type="text"></input>
                </div>
              </div>
            </form>
            <div className="d-flex">
              <p>¿No estás registrado?</p>
              <a href="#" onClick={handleRedirect} role="button">Registrate</a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}