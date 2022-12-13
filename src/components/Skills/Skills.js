import React, { useEffect } from "react";
import './Skills.css';
import Aos from "aos";
import Foto1 from "../../img/foto1.jpg";
import { DiDatabase, DiBootstrap, DiGit, DiHtml5, DiSass, DiJsBadge, DiNodejsSmall, DiPython, DiReact, DiCss3 } from "react-icons/di";

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="container-skills" id='skills'>
            <img src={Foto1} className='sfondo-skills' />
        <div className="skills">
        <div className="top" data-aos="fade-down">
        <h1>My &nbsp;
            <font color="lightblue">S</font>
            <font color="lightblue">k</font>
            <font color="lightblue">i</font>
            <font color="lightblue">l</font>
            <font color="lightblue">l</font>
            <font color="lightblue">s</font>
        </h1>
            </div>
          <div className="wrapper-skils">
            <div data-aos="fade-up" className="skill">
            <DiHtml5 className='car' />
            <h3>HTML</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiCss3 className='car'/>
            <h3>CSS</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiBootstrap className='car'/>
            <h3>BOOTSTRAP</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiJsBadge className='car' />
            <h3>JAVASCRIPT</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiSass className='car' />
            <h3>SASS</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiGit className='car' />
            <h3>GIT</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiReact className='car' />
            <h3>REACT</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiNodejsSmall className='car' />
            <h3>NODE.JS</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiDatabase className='car'/>
            <h3>MONGODB</h3>
            </div>

            <div data-aos="fade-up" className="skill">
            <DiPython className='car'/>
            <h3>PYTHON</h3>
            </div>

        </div>
        </div>
        <div className="privacy-skills">
          <p>@2022 SAIMIR<br></br>
           ALL RIGHTS RESERVED</p>
          </div>
        </div>
    )
}

export default Skills;