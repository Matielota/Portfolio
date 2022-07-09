import React from 'react'
import "./contact.css"
import { useRef } from 'react'
import { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';


export default function Contact() {
  let inputName = useRef(null)
  let inputEmail = useRef(null)
  let inputSubject = useRef(null)
  let inputMessage = useRef(null)

  const initialValues = {
    name:"",
    email:"",
    subject:"",
    message:""
  }
  const validationSchema = yup.object({
    name: yup.string().required("Es necesario llenar este campo").trim("Elimine los espacios"),
    email: yup.string().required("Es necesario llenar este campo").email("El email no es válido").trim("Elimine los espacios"),
    message: yup.string().required("Es necesario llenar este campo").trim("Elimine los espacios")
  })

  const onSubmit = (values, { resetForm }) => {
    console.log(values)
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
        <div className="fake-big">@</div>
        <Form className='contact-form' >
        
            <div className="contact-heading">
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
                <ErrorMessage name="name"/>
                  <span></span>
                </div> 
                <div className="form-input-group">
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <ErrorMessage name="email"/>
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
                <ErrorMessage name="message"/>
                  <span></span>
                </div>
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
