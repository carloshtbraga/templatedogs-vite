import Carousel from "react-bootstrap/Carousel";
import CarrouselImg from "./CarrouselImg";
import "./Carrousel.css";
import banner1 from "../../assets/banner1.jpg";
import banner0 from "../../assets/banner0.jpg";
import banner2 from "../../assets/banner2.jpg";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";

function Carrousel() {
  const { isDarkMode } = useContext(MyContext);

  return (
    <div className={`animate__animated animate__fadeInUp div-pai-carousel ${isDarkMode ? 'dark-mode' : ''}`}>
      <h5 className="h5-carro">Quem não é capaz de amar um animal, também não será capaz de amar um ser humano</h5>
      <Carousel className="main-carousel">
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname={isDarkMode ? "carousel-img-dark" : "carousel-img"}
            text="First slide"
            src={banner0}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname={isDarkMode ? "carousel-img-dark" : "carousel-img"}
            text="Second slide"
            src={banner1}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname={isDarkMode ? "carousel-img-dark" : "carousel-img"}
            text="Third slide"
            src={banner2}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
