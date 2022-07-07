import React from 'react'
import "./texthome.css"
import m from "./letraMsi.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {} from"@fortawesome/free-brands-svg-icons"


export default function TextHome() {
  return (
    <div>
      <section className='section-home'>
        <div className="text-zone">
            <h1>
            Hola, <br></br>Yo soy 
            <img src={m} alt="Matielota" className='img-home'/>atias,
            <br></br> web developer
            </h1>
            <p className='gray-text'>Full Stack Web Developer</p>
            <br />
            <button className='contact-button'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Contactame!</span>
                </div>    
            </button>
        </div>
        <div className="scroll-down">
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
        <div className="scroll-down scroll-down--left">
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
      </section>
    </div>
  )
}
