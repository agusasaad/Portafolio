import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from './../../../public/img/logo.png'
import foto from './../../../public/img/foto.png'




const NavBar = () => {

    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };


    return (
        <div id='sidemenu' className={isMenuActive ? 'active' : ''}>
            <div className="toggle-btn" onClick={toggleMenu}>
                <span><img src={logo} alt="" /></span>
            </div>
            <ul>
                <div id='logo-portfolio'>
                    <div className="logo-portfolio">
                        <img id='foto' src={foto} alt="" />
                    </div>
                    <div className="title-name">
                        <span>FULL STACK DEVELOPER</span>
                        <p>Agustin Asaad</p>
                    </div>
                </div>
                <div className="menu">
                    <span id='menu'>MENU</span>
                </div>
                <li><Link className='nav-link'><HiOutlineHome id='icon' /> <span id='spanNotActive'>Home</span></Link></li>
                <li><Link className='nav-link'><FaRegUser id='icon' /> <span id='spanNotActive'>About Me</span></Link></li>
                <li><Link className='nav-link'><LiaToolsSolid id='icon' /> <span id='spanNotActive'>Tools</span></Link></li>
                <li><Link className='nav-link'><LiaProjectDiagramSolid id='icon' /><span id='spanNotActive'> Projects</span></Link></li>
                <li><Link className='nav-link'><RiContactsLine id='icon' /><span id='spanNotActive'> Contact Me</span></Link></li>
                <div className="menu">
                    <span id='menu'>SOCIAL</span>
                </div>
                <li><Link className='nav-link'><CiLinkedin id='icon' /> <span id='spanNotActive'>Linkedin</span></Link></li>
                <li><Link className='nav-link'><FaGithub id='icon' /><span id='spanNotActive'>GitHub</span></Link></li>
                <li><Link className='nav-link'><RiTwitterXLine id='icon' /> <span id='spanNotActive'>Twitter</span></Link></li>
            </ul>
            <div className="toggle-switch">
                <span className='title-darkMode' id='spanNotActive'>DARK MODE</span>
                <label className="switch">
                    <input type="checkbox" className="input" />
                    <div className='rail'>
                        <span className="circle"></span>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default NavBar