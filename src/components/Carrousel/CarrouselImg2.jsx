import "./Carrousel2.css";

// eslint-disable-next-line react/prop-types
export default function CarrouselImg2({ src }) {
    return (
      <div className="div-carousel-img1">
        <img src={src} alt="carousel1" className="carousel-img1" />
      </div>
    );
  }