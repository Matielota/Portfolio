import React from 'react'
import "./clickcare.css"
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function ClickCare() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
  };
  return (
    <div>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f50057",
          },
          links: {
            color: "#f50057",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    >
    </Particles>
        <Link to="/">
        <button className='contact-button'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Volver</span>
                </div>    
        </button>
        </Link>
    <div className='clickCare-container'>
      <section className='clickCare-container-text'>
        <header className="title-clickCare">
            <h2>Click Care</h2>
        </header>
        <div className='text-zone-clickCare'>

            <p>
            La plataforma administra una bolsa de trabajo, oportunidades para profesionales de la salud y acompañantes terapéuticos.
            tendrá un registro para usuarios, donde los mismos colocaran avisos con necesidades de servicios médicos. Luego profesionales registrados
            y validades, podrán ver dichos avisos y postular a los deseados, enviando su oferta.
            Una vez las dos partes hayan aceptado se genera un contrato para resolver esa oferta.
            Los usuarios serán notificados en todo momento sobre postulaciones, nuevos avisos, tendrán acceso a una sala de chat,
            para acordar los últimos detalles de la visita médica, una vez terminada se abona la misma y directamente se le deposita al profesional,
            los usuarios posteriormente se podrán dar un feedback el cual será visualizado en sus perfiles para otros usuarios.

             </p>
        </div>
        <a href="https://deploy-click-care.vercel.app/">
        <button className='contact-button'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Link deploy</span>
                </div>    
        </button>
       </a>
      </section>
      <div className="media-container">
        <ReactPlayer  className="video-clickcare" url='https://youtu.be/_g3soXhtrSE' width="auto" />
        <img src="https://ucarecdn.com/48d52e14-9bad-4177-a579-d5790b769392/clickCare.jpg" alt="" />
        <img src="https://ucarecdn.com/7e39f5d3-105a-4828-b99e-e5a3b4aa518d/profileclickCare.png" alt="" />
        </div>
    </div>
    <div className="tecnologias-container">
        
    </div>
    </div>
  )
}
