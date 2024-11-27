import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Carrusel () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://i.postimg.cc/dQdVh7Vq/symplifica.png",
    "https://i.postimg.cc/wBmPDTpp/logo-fitpal.png",
    "https://i.postimg.cc/GpCnydFG/hogaru.png",
  ];

  return (
    <div className="m-5">
      <h4>Apps destacadas de la semana</h4>
      <div 
        className="mt-5"
        style={{ width: "80%", height: "400px", margin: "0 auto", overflow: "hidden" }} >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div 
              key={index} 
              style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                style={{ width: "100%" }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
