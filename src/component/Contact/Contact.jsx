import React from 'react'
import "./contact.css"
import { useRef } from 'react'
import { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

export default function Contact() {

  
  

  const initialValues = {
    name:"",
    email:"",
    subject:"",
    message:""
  }
  const validationSchema = yup.object({
    name: yup.string().required("Debes colocar tu nombre").trim("Elimine los espacios"),
    email: yup.string().required("Es necesario llenar este campo").email("El email no es válido").trim("Elimine los espacios"),
    message: yup.string().required("Es necesario llenar este campo").trim("Elimine los espacios"),
  })
 
  const onSubmit = (values, { resetForm }) => {
    
    Swal.fire({
      title: "El mensaje fue enviado correctamente",
      text: "A la brevedad le respondere",
      color: '#f50057',
      background:"#2b2b2b",
      confirmButtonText: 'Entendido',
      confirmButtonColor: "#f50057",
    })
    console.log(values)
    emailjs.send('service_ix6ahbf', 'template_axctbad', values, '2thWcZIwk9UY_paOW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    resetForm();
  };
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
      <div className="contact-section contact-wrapper">
        <Form className='contact-form' >
        
            <div className="contact-heading">
            <div className="fake-big-contact" >/Contact</div>
                <div className="header-work"> 
                    <h2>Contactame:</h2>
                </div>
                <p>Siempre estoy interesado en nuevos proyectos, cualquier duda o consulta puedes escribirme </p>
            </div>
            <div className="form-input-wrapper">
                <div className="form-input-group">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                />
                <ErrorMessage render={(msg) => msg === "Debes colocar tu nombre" ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null}  name="name"/>
                  <span></span>
                </div> 
                <div className="form-input-group">
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <ErrorMessage render={(msg) => msg === "Es necesario llenar este campo" || msg === "El email no es válido"  ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null} name="email"/>
                  <span></span>
                </div> 
                <div className="form-input-group">
                <Field
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="subject"
                />
                
                  <span></span>
                </div> 
                <div className="form-input-group ">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  type="textArea"
                  placeholder="message"
                />
                <ErrorMessage render={(msg) => msg === "Es necesario llenar este campo" ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null} name="message"/>
                  <span></span>
                </div>
                <div className="message-confirmation"></div>
                <button type="submit" className='contact-button submit-submit' onSubmit={onSubmit}>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Enviar mensaje</span>
                </div>    
            </button>  
 
            </div>
            
            </Form>
        
      </div>
      </Formik>
    </div>
  )
}
