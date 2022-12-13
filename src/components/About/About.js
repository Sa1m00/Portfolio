import React, { useEffect } from "react";
import './About.css'; 
import Aos from "aos";
import 'aos/dist/aos.css';
import Scuola from "../../img/scuola.jpg";
import Fucsia from "../../img/fucsia.jpg"
import Reti from "../../img/reti.jpg";
import Developer from "../../img/developer.webp";

const About = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className="about" id="about">
        
        <div className="name" data-aos='fade-up'>
        <h1>
        Something  
        &nbsp;
            <font color="lightblue">A</font>
            <font color="lightblue">b</font>
            <font color="lightblue">o</font>
            <font color="lightblue">u</font>
            <font color="lightblue">t</font>
         &nbsp;
            <font color="lightblue">M</font>
            <font color="lightblue">e</font>
      </h1>
        </div>
       <div className="container-card">
      <div data-aos='fade-up' className="card">
         <div className="container">
         <img src={Scuola} className='image'/>
           <h4><b>high school diploma</b></h4>
           <p>Ho conseguito gli studi in ambito elettronico, 
            che mi ha permesso di diventare perito elettronico una volta  diplomato. 
           </p>
         </div>
      </div>

      <div data-aos='fade-up' className="card">
         <div className="container">
         <img src={Reti} className='image'/>
           <h4><b>Network protocols course</b></h4>
           <p>Ho svolto un corso online sui protocolli di rete,
            switch,router ecc... dove mi ha dato modo di capire cosa e come funzionano
            i protocolli di rete, come vengono trasmesse le informazioni, e molto altro.
           </p>
         </div>
      </div>
      <img src={Fucsia} className='fucsia'/>

      <div data-aos='fade-up' className="card">
         <div className="container">
         <img src={Developer} className='image'/>
           <h4><b>Web Developer course</b></h4>
           <p>Sto svolgendo un corso online come Web Developer, dove sto imparando 
            come creare una pagina web dall'inizio e renderla sempre piu interattiva, e mi sta facendo appassionare
            sempre di puù ai linguaggi di progammazione.
           </p>
         </div>
      </div>
      </div>
      <div className="privacy-about">
          <p>@2022 SAIMIR<br></br>
           ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default About; 