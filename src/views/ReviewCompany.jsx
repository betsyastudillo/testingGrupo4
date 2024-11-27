export function ReviewCompany() {
  return(
    <div classNameName="container mt-5">
      <div classNameName="row">
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card p-4 mb-4 col-sm-3">
          <h3 className="fw-bold">Nombre Proyecto</h3>
          <p className="text-muted">UI/UX Design</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
            Primum quid tu dicis breve?
          </p>
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle me-2"
            />
            <span>Clarke G.</span>
          </div>
          <div className="row text-center">
            <div className="col">
              <div className="mb-2">
                <i className="bi bi-pencil-square fs-3"></i>
              </div>
              <p className="fw-bold">UI/UX Design</p>
            </div>
            <div className="col">
              <div className="mb-2">
                <i className="bi bi-clock fs-3"></i>
              </div>
              <p className="fw-bold">1 Week Sprints</p>
            </div>
            <div className="col">
              <div className="mb-2">
                <i className="bi bi-calendar fs-3"></i>
              </div>
              <p className="fw-bold">3 Months</p>
            </div>
            <div className="col">
              <div className="mb-2">
                <i className="bi bi-cash fs-3"></i>
              </div>
              <p className="fw-bold">Fixed</p>
            </div>
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="card p-4 mb-4 col-sm-8">
          <h4 className="fw-bold mb-3">Reseñas de la App</h4>
          <div className="d-flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div className="card p-3" style={{ width: "18rem" }} key={index}>
              <div className="d-flex align-items-center mb-3">
                <img
                  src='@/public/assets/img/anonimo.png'
                  alt="User Profile"
                  className="rounded-circle me-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <h6 className="fw-bold mb-0">Usuario {index + 1}</h6>
              </div>
              <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
              <div className="mt-2">
                {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map((_, starIndex) => (
                  <i className="bi bi-star-fill text-warning" key={starIndex}></i>
                ))}
                {Array.from({ length: 5 - Math.floor(Math.random() * 5) - 1 }).map((_, starIndex) => (
                  <i className="bi bi-star text-muted" key={starIndex}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        <div className="col-lg-4">
          <div className="card p-4 mb-4">
            <h4 className="fw-bold">Customer</h4>
            <p className="mb-2">Flashlite</p>
            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}}>75%</div>
            </div>
          </div>

          <div className="card p-4 mb-4">
            <h4 className="fw-bold">Project Tools</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-palette me-2"></i> Sketch</li>
              <li className="mb-2"><i className="bi bi-vector-pen me-2"></i> Illustrator</li>
              <li className="mb-2"><i className="bi bi-brush me-2"></i> Photoshop</li>
            </ul>
          </div>

          <div className="card p-4">
            <h4 className="fw-bold">Project Stacks</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-code me-2"></i> HTML5</li>
              <li className="mb-2"><i className="bi bi-code-slash me-2"></i> JavaScript</li>
              <li className="mb-2"><i className="bi bi-boxes me-2"></i> Vue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}