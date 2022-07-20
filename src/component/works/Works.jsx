import React from 'react'
import "./works.css"
import WorkContent from '../worksContent/WorkContent'
import {Link} from "react-router-dom"
export default function Works() {
  return (
    <div className='work-container'>
      <aside className="section-work">
            <div className="header-work">
                <h2 className='title-work'>
                  <span className='animation-work'>M</span>
                  <span className='animation-work'>i</span>
                  <span  style={{opacity:"0"}}>_</span>
                  <span className='animation-work'>P</span>
                  <span className='animation-work'>o</span>
                  <span className='animation-work'>r</span>
                  <span className='animation-work'>t</span>
                  <span className='animation-work'>a</span>
                  <span className='animation-work'>f</span>
                  <span className='animation-work'>o</span>
                  <span className='animation-work'>l</span>
                  <span className='animation-work'>i</span>
                  <span className='animation-work'>o</span>  
                </h2>
            </div>
        <div className='text-zone-work'>
              <div>
                <p> Estos son los projectos en los que he trabajado, en back end utilizando Node.js sequelize MySQL,MongoDb
                    y en front con React, css clasico, styled components, JQuery, HTML, JS. 
                     Espero que les gusten!!</p><br />
                <span>Si quieres conocer mas sobre mis trabajos escribeme</span>
                <button className='contact-button button2'>
                  <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Mas sobre mi</span>
                  </div>    
                  </button>
                </div>
        </div>
        <div className="fake-big-2">/Work</div>
      </aside>
      <div className="magic-wall-section">
          <ul>
            
            <WorkContent img={"https://ucarecdn.com/c56723ea-8f2e-42c2-965d-25621e0db538/imagenclickcare.jpg"} linkto={"https://deploy-click-care.vercel.app/"}/>
        
            <WorkContent img={"https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/2c/09/3e/2c093eec-11ec-b433-d631-7ae419ab65ff/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"} linkto={"https://climapp-matielota.vercel.app/"}/>
            
            <WorkContent img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/matielotasshop.jpg?alt=media&token=0436680e-1482-4cb5-8476-60cb6b8c7104"} linkto={"https://deploy-front-ecomerce.vercel.app/"}/>

            <WorkContent img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/1658259168646dog.png?alt=media&token=c961c03f-30dd-45f4-8ccc-8b9ed743da29"} linkto={"https://dogis-front-end.vercel.app/"}/>

            <WorkContent img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/portfoliotapa.jpg?alt=media&token=543edb7e-97ba-4e9a-96b9-e216ba12fe1b"} linkto={"https://portfolio-matielota.vercel.app/"}/>
            
          </ul>
      </div>
    </div>
  )
}
