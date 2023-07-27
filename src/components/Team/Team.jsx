import "./Team.css";
import Carrousel2 from "../Carrousel/Carrousel2";
// import dog1 from "../../assets/dog1.png";
// import cat from "../../assets/cat.png";
import tv from "../../assets/tv.png";

export default function Team() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#af0745"
          fillOpacity="1"
          d="M0,256L160,128L320,224L480,288L640,224L800,288L960,256L1120,64L1280,128L1440,128L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
        ></path>
      </svg>

      <section className="team">
        <h1>Conheça nosso Time</h1>
        <div className="divdog">
          {/* <img src={dog1} alt="" className="dog" /> */}
          <div className="tv-container">
            <img src={tv} alt="" className="tv" />
            <div className="carrossel-container">
            <Carrousel2 />
            </div>
          </div>
          {/* <img src={cat} alt="" className="dog" /> */}
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#af0745"
          fillOpacity="1"
          d="M0,256L160,128L320,224L480,288L640,224L800,288L960,256L1120,64L1280,128L1440,128L1440,0L1280,0L1120,0L960,0L800,0L640,0L480,0L320,0L160,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
