// import './CreateTodoButton.css'

export function CardApp() {
  return (
    <div id="componente" className="card shadow-sm">
      <img
        src="https://tairo.cssninja.io/img/apps/3.jpg"
        className="card-img-top"
        alt="Project Preview"
      />

      <div className="card-body">
        <img
          src="https://tairo.cssninja.io/img/icons/logos/flashlite.svg"
          className="rounded-circle border me-1"
          width="40"
          alt="Avatar 1"
        />
        <div className="ms-1">
          <h5 className="card-title mb-0">
            <span>Delivery App Project </span>
          </h5>
          <p className="text-muted">Flashlite | Delivery</p>
        </div>
        <div className="bg-light">
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">
              <span>13 testing</span>
            </div>
            <div className="d-flex">
              <img
                src="https://tairo.cssninja.io/img/avatars/12.svg"
                className="rounded-circle border me-1"
                width="40"
                alt="Avatar 1"
              />
              <img
                src="https://tairo.cssninja.io/img/avatars/13.svg"
                className="rounded-circle border me-1"
                width="40"
                alt="Avatar 2"
              />
              <img
                src="https://tairo.cssninja.io/img/avatars/11.svg"
                className="rounded-circle border"
                width="40"
                alt="Avatar 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}