import React, { useEffect } from "react";
import './Works.css'
import Aos from "aos"
import Log from "../../img/log-in.jpg";
import Filter from "../../img/filter-shop.png";
import Shopy from "../../img/shopy-all.png";
import Sticky from "../../img/sticky-notes.jpg";
import {  GiClick } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
import { FiEye } from "react-icons/fi";
import Foto2 from "../../img/Foto2.jpg";

const Works = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <div className="works"id="works">
        
        <img src={Foto2} className='sfondo-works' /> 
          <div className="container-works">   
          <div className="works-top" data-aos="fade-right">
       <h1>My &nbsp;
           <font color="lightblue">W</font>
           <font color="lightblue">o</font>
           <font color="lightblue">r</font>
           <font color="lightblue">k</font>
           <font color="lightblue">s</font>
       </h1>
       </div>  
       <div className="works-works">
      <div className="card-works" data-aos="fade-up">
        <img src={Log} className='works-img' />
        <div className="intro-works">
            <h5 className="works-github"><a className="work-href" href=""><DiGithubBadge /></a></h5>
            <p className="show-works"><GiClick /></p>
            <h5 className="works-netify"><a className="work-href" href="https://effortless-bunny-79f280.netlify.app"><FiEye /></a></h5>
        </div>
            <h3>Javascript</h3>
            <h6>
            LOG-IN eseguito con HTML<br></br>
            -CSS-JAVASCRIPT.
            </h6>
      </div>
      <div className="card-works" data-aos="fade-up">
        <img src={Filter} className='works-img' />
        <div className="intro-works">
            <h5 className="works-github"><a className="work-href" href=""><DiGithubBadge /></a></h5>
            <p className="show-works"><GiClick /></p>
            <h5 className="works-netify"><a className="work-href" href="https://saimir-filter-shop.netlify.app"><FiEye /></a></h5>
        </div>
            <h3>Javascript</h3>
            <h6>
            FILTER eseguito con HTML<br></br>
            -CSS-JAVASCRIPT.
            </h6>
      </div>
      <div className="card-works" data-aos="fade-up">
        <img src={Shopy} className='works-img' />
        <div className="intro-works">
            <h5 className="works-github"><a className="work-href" href=""><DiGithubBadge /></a></h5>
            <p className="show-works"><GiClick /></p>
            <h5 className="works-netify"><a className="work-href" href="https://shopy-all.netlify.app"><FiEye /></a></h5>
        </div>
            <h3>React Js</h3>
            <h6>
            SHOPY-ALL eseguito con 
            <br></br>
            REACR.JS
            </h6>
      </div>
      <div className="card-works" data-aos="fade-up">
        <img src={Sticky} className='works-img' />
        <div className="intro-works">
            <h5 className="works-github"><a className="work-href" href=""><DiGithubBadge /></a></h5>
            <p className="show-works"><GiClick /></p>
            <h5 className="works-netify"><a className="work-href" href="https://saimir-sticky-notes.netlify.app"><FiEye /></a></h5>
        </div>
            <h3>Javascript</h3>
            <h6>
            FILTER eseguito con HTML<br></br>
            -CSS-JAVASCRIPT.
            </h6>
      </div>
      </div>
       </div>
       <div className="privacy-works">
          <p>@2022 SAIMIR<br></br>
           ALL RIGHTS RESERVED</p>
          </div>
       </div>

  )
}

export default Works


