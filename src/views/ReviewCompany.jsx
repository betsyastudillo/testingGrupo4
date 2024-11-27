import '../assets/css/ReviewCompany.css'
import { useParams, useLocation } from "react-router-dom";
import { useCompanies } from "../CompanyContext";

export function ReviewCompany() {

  const { id } = useParams();
  const { companies } = useCompanies();
  const { state } = useLocation();

  const company = companies.find((company) => company.id === id);

  if (!company || !state || !state.company) {
    return <h1>Empresa no encontrada</h1>;
  }


  return(
    <div classNameName="container mt-5">
      <div classNameName="row">
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card p-4 mb-4 col-sm-4">
          <div className="d-flex align-items-center mb-4">
            <img
              src={company.imageLogoSrc}
              className="rounded-circle border me-2"
              width="60"
              height="60"
              alt="Logo"
            />
          <h3 className="fw-bold">{company.title}</h3>
          </div>
          <p className="text-muted">{company.subtitle}</p>
          <div className="row">
            <div className="col">
              <h4>Beneficios</h4>
              <ul>
                {company.beneficios.map((servicio, index) => (
                  <li key={index}>
                    <h6>{servicio.title}</h6>
                    <p>{servicio.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a
                href={company.linkAS} // URL de la App Store
                className="btn btn-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-apple me-2"></i>
                <div className="text">
                  <span className="small">Descárgala en</span>
                  <br />
                  <strong>App Store</strong>
                </div>
              </a>

              <a
                href={company.linkPS} // URL de la Play Store
                className="btn btn-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-google-play me-2"></i>
                <div className="text">
                  <span className="small">Descárgala en</span>
                  <br />
                  <strong>Play Store</strong>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="card p-4 mb-4 col-sm-7">
          <h4 className="fw-bold mb-3">Reseñas de la App</h4>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="card p-3" style={{ width: "18rem" }} key={index}>
              <div className="d-flex align-items-center mb-3">
                <img
                  src='https://i.postimg.cc/4dNDmTsj/image.png'
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
                {Array.from({ length: 5 - Math.floor(Math.random() * 2) - 1 }).map((_, starIndex) => (
                  <i className="bi bi-star text-muted" key={starIndex}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}