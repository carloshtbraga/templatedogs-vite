import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/About/About';
import Grid from './components/Grid/Grid';
import Team from './components/Team/Team';
import About2 from './components/About2/About2';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
     <Header />

     <main style={{backgroundColor: '#c8b080'}}>
      <Carrousel />      
      <About />
      <Grid />
      <Team />
      <About2 />
      <Footer />
     </main>
    </>
  )
}

export default App
