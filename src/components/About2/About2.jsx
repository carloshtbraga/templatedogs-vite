import "./About2.css";
import shower from '../../assets/about2/shower.svg'
import guided from '../../assets/about2/guided.svg'
import secador from '../../assets/about2/secador1.svg'
import veterinario from '../../assets/about2/veterinario.svg'
import hotel from '../../assets/about2/hotel.svg'
import surgery from '../../assets/about2/surgery.svg'
import { useContext } from "react";
import MyContext from "../../Context/MyContext";

export default function About2() {
  const { isDarkMode } = useContext(MyContext);
  return (
    <>
      <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 00 1440 320">
        <path
          fill={isDarkMode ? "rgb(50, 50, 50)" : "#af0745"}
          fillOpacity="10"
          d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
        ></path>
      </svg>

      <section className={isDarkMode ? 'about2-dark' : 'about2'}>
        <h1>O que a gente faz?</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas doloremque earum velit illum, nihil, vero iusto beatae natus eveniet cum et voluptatum minima dolorum. Modi dolor quisquam aut repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas doloremque earum velit illum, nihil, vero iusto beatae natus eveniet cum et voluptatum minima dolorum. Modi dolor quisquam aut repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas doloremque earum velit illum, nihil, vero iusto beatae natus eveniet cum et voluptatum minima dolorum. Modi dolor quisquam aut repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas doloremque earum velit illum, nihil, vero iusto beatae natus eveniet cum et voluptatum minima dolorum. Modi dolor quisquam aut repellendus?</h5>
        <div className="main-about2">
          <div className="divabout2">
            <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={shower} alt="" />Banho</p>
            <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={secador} alt="" />Tosa</p>
            <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={guided} alt="" />Adestramento</p>

           
          </div>
          <div className="divabout2">
          <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={veterinario} alt="" />Veterinário</p>
            <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={hotel} alt="" />Dog Hotel</p>
            <p className="pdoabout animate__animated animate__fadeInUp"><img className='svgabout2' src={surgery} alt="" />Cirurgias</p>
         
          </div>
        </div>
      </section>
      <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320">
        <path
          fill={isDarkMode ? "rgb(50, 50, 50)" : "#af0745"}
          fillOpacity="10"
          d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
