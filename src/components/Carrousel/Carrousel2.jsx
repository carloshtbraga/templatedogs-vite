import Carousel from 'react-bootstrap/Carousel';
import CarrouselImg2 from '../Carrousel/CarrouselImg2';
import './Carrousel2.css';

function Carrousel2() {
    return (
      <div className="div-pai-carousel1" >
        <Carousel className="main-carousel1" fade>
          <Carousel.Item className="carousel-item1">
            <CarrouselImg2
              classname="carousel-img1"
              text="First slide"
              src='https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=1060&t=st=1690435447~exp=1690436047~hmac=b792a165b57b3961168a31013fadbc1830693aa7f6af3039e0c4979c95a0af59'
            />
            <Carousel.Caption>
              <h3>Maria</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item1">
            <CarrouselImg2
              classname="carousel-img1"
              text="Second slide"
              src='https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?w=1060&t=st=1690435436~exp=1690436036~hmac=0451466ec553c4d9f1356bab9465d9da40a2b451260565f7e2c6da0147abb007'
            />
            <Carousel.Caption>
              <h3>João</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item1">
            <CarrouselImg2
              classname="carousel-img1"
              text="Third slide"
              src='https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=1060&t=st=1690435407~exp=1690436007~hmac=37d3be1ddf3f48eaf36569aa57e703ea41a5646ce3bb755b1165db23e6a1fcf6'
            />
            <Carousel.Caption>
              <h3>Andréia</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        
        
        </Carousel>
  
        
      </div>
    );
  }
  
  export default Carrousel2;
  