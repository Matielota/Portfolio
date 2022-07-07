import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom' 
import m from "./Mlleter.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub} from"@fortawesome/free-brands-svg-icons"
import { useRef } from 'react'




export default function SideBar({sideNav}) {
  let asideClass = useRef(null)
 
  console.log(sideNav)
  return (
    <div className='padre'>
      <aside id="aside" 
      className='aside' 
      style={(sideNav==="open"? {overflow: "visible", height: "100%"}:null)} 
      ref={asideClass}
      >
        <div className="asidewrapper">
            <div className="logo-section">
                 <a href="/" className='logo'>
                    <img src={m} alt="" />
                    <span>Matielota</span>
                 </a>
            <span>Full Stack Developer</span>
            </div>
            <nav className="nav-links">
            <a href='/about'> Sobre mi:</a>
            <a href='/skills'> Mis Habilidades</a>
            <a href='/projects'> Projectos</a>
            <a href='/learn'> Estudios</a>
            <a href='/contact'> Contacto</a>
            </nav>
            <ul className='social-icons'>
                <li>
                    <a href="https://www.linkedin.com/in/matias-caceres00/">
                    <FontAwesomeIcon icon={faLinkedin}  className="social-media"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Matielota">
                    <FontAwesomeIcon icon={faGithub}  className="social-media"/>
                    </a>
                </li>
            </ul>
        </div>
      </aside>
    </div>
  )
}
