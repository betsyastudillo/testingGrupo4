import { useNavigate } from "react-router-dom";

export function CardApp({ imageLogoSrc, imageSrc, title, subtitle, description, avatars }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/review-company"); // Usa la ruta proporcionada por el padre
  };

  return (
    <div 
      id="componente" 
      className="card shadow-sm" 
      onClick={handleRedirect}
      style={{
        cursor: 'pointer'
      }}
    >
      <img
        src={imageSrc} // Imagen dinámica
        className="card-img-top"
        alt="Project Preview"
        height='300px'
      />

      <div className="card-body">
        <img
          src={imageLogoSrc}
          className="rounded-circle border me-1"
          width="40"
          alt="Logo"
        />
        <div className="ms-1">
          <h5 className="card-title mb-0">
            <span>{title}</span> {/* Título dinámico */}
          </h5>
          <p className="text-muted">{subtitle}</p> {/* Subtítulo dinámico */}
        </div>
        <div className="bg-light">
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">
              <i className="bi bi-star-fill text-muted"></i>
              <i className="bi bi-star-fill text-muted"></i>
              <i className="bi bi-star-fill text-muted"></i>
              <i className="bi bi-star-fill text-muted"></i>
              <i className="bi bi-star-fill text-muted"></i>
            </div>
            <div className="d-flex">
              {/* Renderizar avatares dinámicamente */}
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  className="rounded-circle border me-1"
                  width="40"
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}