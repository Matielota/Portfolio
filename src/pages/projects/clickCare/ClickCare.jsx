import React from 'react'
import "./clickcare.css"
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"

export default function ClickCare() {

  return (
    <div>
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
            La plataforma adminitra una bolsa de trabajo, oportunidades para profesionales de la salud y acompañantes terapeuticos.
            <br />
            tendra un registro para usuarios, donde los mismos colocaran avisos con necesidades de servicios medicos. Luego profesionales registrados
            y validades, podran ver dichos avisos y postular a los deseados, enviando su oferta.
            Una vez las dos partes hallan aceptado se genera un contrato para resolver esa oferta.
            <br />
            Los usuarios seran notificados en todo momento sobre postulaciones, nuevos avisos, tendran acceso a una sala de chat,
            para acordar los ultimos detalles de la visita medica, una vez terminada se abona la misma y directamente se le deposita al profesional,
            los usuarios posteriormente se podran dar un feedback el cual sera visualizado en sus perfiles para otros usuarios.
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
