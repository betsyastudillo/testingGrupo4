export function AuthUser() {
  return (
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="d-flex justify-content-start">
              <img
                className="img-logo me-3"
                src="https://i.postimg.cc/W3598G1n/Imagen3.png"
                width="50"
                alt="logo"
              />
              <h5 class="modal-title">Iniciar sesión</h5>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <label>Usuario</label>
                  <input className="form-control" type="text"></input>
                </div>
                <div class="col-12">
                  <label>Contraseña</label>
                  <input className="form-control" type="text"></input>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}