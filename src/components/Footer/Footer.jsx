import "./Footer.css";
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
export default function Footer() {
  return (
    <footer>
      <div className="footer1 animate__animated animate__fadeInUp">
        <h5>Você pode também nos achar no:</h5>
        <p><img src={fb} alt="" />Instagram</p>
        <p><img src={insta} alt="" />Facebook</p>
      </div>
      <div className="footer2 animate__animated animate__fadeInUp">
      <img src="https://www.devs4good.com.br/assets/header-astronaut-ac0308c6.webp" alt="" />
        <h3> Desenvolvido por Devs4Good © 2023</h3>
      </div>
    </footer>
  );
}
