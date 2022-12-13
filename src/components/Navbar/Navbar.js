import React, {useState} from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggle');

    const navToggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')

      toggleIcon === 'nav_toggle' ? setToggleIcon('nav_toggle toggle') : setToggleIcon('nav_toggle')
   };

     
    return(
        <nav className='nav'>
            <h1 className='title'>Saimir Gjepali</h1>
          <ul className={active}>
            <li onClick={navToggle}  className='nav_item'><a href='#intro' className='nav-link'>HOME</a></li>
            <li onClick={navToggle} className='nav_item'><a href='#about'className='nav-link'>ABOUT</a></li>
            <li onClick={navToggle} className='nav_item'><a href='#skills'className='nav-link'>SKILLS</a></li>
            <li onClick={navToggle} className='nav_item'><a href='#works'className='nav-link'>WORKS</a></li>
            <li onClick={navToggle} className='nav_item'><a href='#contact'className='nav-link'>CONTACT</a></li>   
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </nav>
    )
}


export default Navbar