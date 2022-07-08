import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div>
      <div className="contact-section contact-wrapper">
        <div className="fake-big">@</div>
        <form className='contact-form'>
            <div className="contact-heading">
                <div className="header-work"> 
                    <h2>Contactame:</h2>
                </div>
                <p>Siempre estoy interesado en nuevos proyectos, cualquier duda o consulta puedes escribirme </p>
            </div>
            <div className="form-input-wrapper">
                <div className="form-input-group">
                  <input type="text" placeholder='Nombre' name="name" className='name'></input>
                  <span></span>
                </div> 
                <div className="form-input-group">
                  <input type="text" placeholder='Email' name="email" className='email'></input>
                  <span></span>
                </div> 
                <div className="form-input-group">
                  <input type="text" placeholder='tema' name="subject" className='subject'></input>
                  <span></span>
                </div> 
                <div className="form-input-group">
                  <textarea type="text" placeholder='mensaje' name="message" className='message'></textarea>
                  <span></span>
                </div> 
                <button type="submit" className='contact-button submit-submit'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Enviar mensaje</span>
                </div>    
            </button> 
            </div>
            
        </form>
        
      </div>

    </div>
  )
}
