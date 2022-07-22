import React from 'react'
import "./contact.css"
import { useRef } from 'react'
import { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive.js";
import { useDispatch, useSelector} from "react-redux";

export default function Contact() {
  const color= useSelector((state)=>state.color)
  const ContactButtonDiv= styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all .3s ease-in-out;
`
const ContactButtonBg=styled.span`
    position: absolute;
    width: 0%;
    height: 100%;
    left: -5px;
    top:0;
    transition: all .3s ease-in-out;  
    background-color: ${color};
    transform: skewX(-19deg);
`
const ContactButtonBase=styled.span`
    width: 100%;
    height: 100%;
    position:absolute;
    left: 0;
    border: 1px solid ${color};
    box-sizing: border-box;
`
const ContactButtonText=styled.span`
    font-size: 1.6rem;
    position: absolute;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif
    &:hover{
        color: black;
    }
`
  const ContactButton=styled.button`
    margin-bottom: 40px;
    margin-left: 40px;
    text-decoration: nome;
    text-align: center;
    width: 300px;
    max-width: 350px;
    height: 60px;
    display: block;
    line-height: 40px;
    letter-spacing: 3px;
    position: relative;
    background-color: transparent;
    border: none;
    color: ${color};
    &:hover ${ContactButtonBg}{width: 110%;}
    &:hover ${ContactButtonText}{color:black;}      
`  
  
  

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
                <div className="title-work-contact"> 
                    <h2>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span>a</span>
                    <span>m</span>
                    <span>e</span>
                    </h2>
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
                <ContactButton key="ContactButton" type="submit" onSubmit={onSubmit}>
                      <ContactButtonDiv key="ContactButtonDiv">
                      <ContactButtonBg key="ContactButtonBg"></ContactButtonBg>
                      <ContactButtonBase key="ContactButtonBase"></ContactButtonBase>
                      <ContactButtonText key="ContactButtonText"> Contactame!</ContactButtonText>
                </ContactButtonDiv >   
  
            </ContactButton>
            </div>
            
            </Form>
        
      </div>
      </Formik>
    </div>
  )
}
