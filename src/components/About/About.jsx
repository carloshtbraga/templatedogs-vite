import './About.css'

import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
export default function About() {

  const {isDarkMode} = useContext(MyContext);

  return (
    <>
    <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 00 1440 320"><path fill={isDarkMode ? 'rgb(50, 50, 50)':"#af0745"} fillOpacity="10" d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
   
    <section className={!isDarkMode? 'about' : 'about-dark'}>
    
        <div className='animate__animated animate__fadeInUp'>
        <img src='https://i.pinimg.com/originals/05/ac/4c/05ac4c67fb8adfbd2daaebf0a6cd71e9.png' />
        </div>
        <div className={isDarkMode ? 'divp-dark animate__animated animate__fadeInUp' : 'divp animate__animated animate__fadeInUp'}>
        <h1>Welcome</h1>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis, unde quam vel nihil aliquid rerum sapiente enim asperiores voluptatem corporis molestias pariatur. Nisi est facere maiores expedita itaque corrupti!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis, unde quam vel nihil aliquid rerum sapiente enim asperiores voluptatem corporis molestias pariatur. Nisi est facere maiores expedita itaque corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis, unde quam vel nihil aliquid rerum sapiente enim asperiores voluptatem corporis molestias pariatur. Nisi est facere maiores expedita itaque corrupti!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis, unde quam vel nihil aliquid rerum sapiente enim asperiores voluptatem corporis molestias pariatur. Nisi est facere maiores expedita itaque corrupti!</p>
        </div>
    </section>
    <svg className={isDarkMode ? 'svgdark' : 'svglight'} xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill={isDarkMode ? 'rgb(50, 50, 50)':"#af0745"} fillOpacity="10" d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>
     
      </>
  )
}
