import React, { useEffect }from "react";
import { Typewriter } from 'react-simple-typewriter';
import './Intro.css';
import Fucsia from "../../img/fucsia.jpg"
import Io from "../../img/Soggetto.gif"
import Aos from "aos";
import 'aos/dist/aos.css';



const Intro = () => {

  useEffect(() => {
    Aos.init({duration: 3000});
}, []);

    return (
      <div className="intro" id="intro">
         <div className="left" data-aos='fade-right'>
         <h1>Hi! 👋</h1>
         <h1>I am</h1>
         <span className="blueText" style={{ color: 'lightBlue', fontWeight: 'bold', fontSize: '45px' }}>
         <Typewriter
            words={['Saimir!', 'Junior Front End Developer.', 'Full Stack Developer Student.']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
         </span>
         </div>


         <div className="right" data-aos='fade-up'>            
          <img  src={Io} className='io' />
          <div className="privacy-intro">
          <p>@2022 SAIMIR<br></br>
           ALL RIGHTS RESERVED</p>
          </div>
         </div>
      </div>
    )
}

export default Intro