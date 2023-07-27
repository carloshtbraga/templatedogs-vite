import Carousel from "react-bootstrap/Carousel";
import CarrouselImg from './CarrouselImg'
import "./Carrousel.css";
import banner1 from '../../assets/banner1.jpg'
import banner0 from '../../assets/banner0.jpg'
import banner2 from '../../assets/banner2.jpg'

function Carrousel() {
  return (
    <div className="div-pai-carousel">
      <Carousel className="main-carousel">
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="First slide"
            src={banner0}
          />
          
    
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="Second slide"
            src={banner1}
          />
        
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="Third slide"
            src={banner2}
          />
         
        </Carousel.Item>
        
     
     
      </Carousel>

      
    </div>
  );
}

export default Carrousel;
