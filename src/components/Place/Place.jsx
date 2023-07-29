import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import GridPlace from "../Grid/GridPlace";
import "./Place.css";


export default function Place() {
  const { isDarkMode } = useContext(MyContext);

 
  
  return (
    <>
      <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={isDarkMode ? "rgb(50, 50, 50)" : "#af0745"}
          fillOpacity="1"
          d="M0,256L160,128L320,224L480,288L640,224L800,288L960,256L1120,64L1280,128L1440,128L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
        ></path>
      </svg>

      <section className={isDarkMode? 'grid-dark' : 'grid'}>
      <h1>Conheça nosso canto!</h1>
      <p className="p-place">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque minima odit sit inventore cupiditate hic ratione blanditiis laboriosam aut officiis corrupti omnis facilis illo deleniti, quam doloremque explicabo amet?</p>
      <GridPlace />         
    </section>
            <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill={isDarkMode ? "rgb(50, 50, 50)" : "#af0745"}
                fillOpacity="1"
                d="M0,256L160,128L320,224L480,288L640,224L800,288L960,256L1120,64L1280,128L1440,128L1440,0L1280,0L1120,0L960,0L800,0L640,0L480,0L320,0L160,0L0,0Z"
              ></path>
            </svg>
          </>
        
      
  );
}
