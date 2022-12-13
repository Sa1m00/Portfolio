import { useRef, useEffect } from 'react'
import './Contact.css'
import Fumo1 from "../../img/fumo1.webp"; 
import Aos from "aos";
import emailjs from '@emailjs/browser';
import { IoLogoInstagram } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_56vm70e', 'template_3gypykh', form.current, 'AKezPxoB2aVhN6TUu')
          .then((result) => {
            console.log(result.text);
          }
           , (error) => {
              console.log(error.text);
          });
            alert(' Your email has been sent successfully')
            e.target.reset();
      };

      useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className='container-contact' id='contact'>
        <img src={Fumo1} className='sfondo-contact' />
            <div className="top" data-aos="fade-right">
        <h1>Keep in &nbsp;
            <font color="lightblue">T</font>
            <font color="lightblue">o</font>
            <font color="lightblue">u</font>
            <font color="lightblue">c</font>
            <font color="lightblue">h</font>
        </h1>
            </div>

            <div className='cont-social'>
            <div className='social' data-aos="fade-up">
              <a href='https://www.instagram.com/saimir_gjepali/'> <IoLogoInstagram /></a>
            </div>
            <div className='social' data-aos="fade-up">
              <a href='https://github.com/Sa1m00'> <DiGithubBadge /></a>
            </div>
            <div className='social' data-aos="fade-up">
              <a href='https://www.linkedin.com/feed/'> <FaLinkedin /></a>
            </div>

            </div>
         <form ref={form} onSubmit={sendEmail} className='form-contact'  data-aos="fade-left">
           <input type='text' className='input-contact' placeholder='Full Name'
            name='user_name' required/>
            <input type='email' className='input-contact' placeholder='Email'
            name='user_email' required/>
            <input type='text' className='input-contact' placeholder='Subject'
            name='subject' required/>
            <textarea placeholder='Write your message...'
            name='message' cols='30' rows='10' required></textarea>
            <button className='button-35' type='submit'>Send Message</button>
         </form> 
    </div>
  )
}

export default Contact
