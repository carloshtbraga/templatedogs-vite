import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/About/About';
import Grid from './components/Grid/Grid';
import Team from './components/Team/Team';
import About2 from './components/About2/About2';
import Footer from './components/Footer/Footer';
import AnimateOnScroll from 'react-global-animate-on-scroll';
import { useContext } from 'react';
import MyContext from './Context/MyContext';

function App() {
  const { isDarkMode } = useContext(MyContext);

  return (
    <>
     <Header />

     <main className={isDarkMode ? 'maindark' : 'mainlight'}>
      <Carrousel />      
      <About />
      <Grid />
      <Team />
      <About2 />
      <Footer />
     </main>

     <AnimateOnScroll animateOnce/>
    </>
  )
}

export default App
