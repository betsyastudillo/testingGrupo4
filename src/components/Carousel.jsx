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
    "https://i.postimg.cc/wBMH8W3h/promo-Juegos.png",
    "https://i.postimg.cc/43kskXbL/promoMax.png",
    "https://tairo.cssninja.io/img/icons/logos/flashlite.svg",
  ];

  return (
    <div className="mt-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
