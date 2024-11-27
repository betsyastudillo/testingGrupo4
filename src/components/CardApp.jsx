import { useNavigate } from "react-router-dom";

export function CardApp({ id, imageLogoSrc, imageSrc, title, subtitle, stairs, avatars }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/review-company/${id}`, { state: { company: { id, imageLogoSrc, imageSrc, title, subtitle, stairs, avatars } } });
  };

  return (
    <div 
      id={`componente-${id}`} 
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
            <span>{title}</span> 
          </h5>
          <p className="text-muted">{subtitle}</p> 
        </div>
        <div className="bg-light">
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">
            {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map((_, starIndex) => (
                  <i className="bi bi-star-fill text-warning" key={starIndex}></i>
                ))}
                {Array.from({ length: 5 - Math.floor(Math.random() * 2) - 1 }).map((_, starIndex) => (
                  <i className="bi bi-star text-muted" key={starIndex}></i>
                ))}
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