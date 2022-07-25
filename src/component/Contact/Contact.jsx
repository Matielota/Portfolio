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

const ContactSection=styled.div`
  width: 100%;
  margin-bottom: 100px;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  position: relative;
` 
const ContactHeading=styled.div`
  margin-bottom: 30px;
  position: relative;
`


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
const style={
  position: "relative",
  width: "100%",
  height: "50px",
  outline: "none",
  border: "none",
  padding: "0 20px",
  marginBottom: "5px",
  fontFamily: "sans-serif",
  fontSize: "0.957rem",
  boxShadow: "0 0 0px 1000px #2b2b2b inset"
}
const style2={
  position: "relative",
  width: "100%",
  height: "25vh",
  outline: "none",
  border: "none",
  padding: "10px 20px",
  marginBottom: "5px",
  fontFamily: "sans-serif",
  fontSize: "0.957rem",
  boxShadow: "0 0 0px 1000px #2b2b2b inset"
}
const FormInputGroupInputSpan=styled.span`
&:after{
  content: "";
  width: 0%;
  height: 2px;
  position: absolute;
  background-color: #f50057;
  bottom: 5px;
  left: 0;
  transition: all 0.3s linear;
`
const FormInputGroupTextSpan=styled.span`
&:after{
  content: "";
  width: 0%;
  height: 2px;
  position: absolute;
  background-color: #f50057;
  bottom: 5px;
  left: 0;
  transition: all 0.3s linear;
`
const FormInputGroup=styled.div`
  width: 100%;
  position: relative;
  &:focus{
    &:${FormInputGroupInputSpan}:after{
      width: 100%;
    }
  }
`
const TitleWorkContact=styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${color};
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  &:hover{
    color: #909096;
    animation-duration: 3s;
    animation: animation_hover 3s; 
  }
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
      <ContactSection id='contactos'>
        <Form className='contact-form' >
        
            <ContactHeading>
                <TitleWorkContact> 
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
                </TitleWorkContact>
                <p>Siempre estoy interesado en nuevos proyectos, cualquier duda o consulta puedes escribirme </p>
            </ContactHeading>
            <div className="form-input-wrapper">
                <FormInputGroup>
                <Field
                  style={style}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                />
                <ErrorMessage render={(msg) => msg === "Debes colocar tu nombre" ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null}  name="name"/>
                  <FormInputGroupInputSpan></FormInputGroupInputSpan>
                </FormInputGroup> 
                <FormInputGroup>
                <Field
                  style={style}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <ErrorMessage render={(msg) => msg === "Es necesario llenar este campo" || msg === "El email no es válido"  ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null} name="email"/>
                  <FormInputGroupInputSpan></FormInputGroupInputSpan>
                </FormInputGroup> 
                <FormInputGroup>
                <Field
                  style={style}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="subject"
                />
                
                  <FormInputGroupInputSpan></FormInputGroupInputSpan>
                </FormInputGroup> 
                <FormInputGroup>
                <Field
                  style={style2}
                  as="textarea"
                  id="message"
                  name="message"
                  type="textArea"
                  placeholder="message"
                />
                <ErrorMessage render={(msg) => msg === "Es necesario llenar este campo" ||  msg === "Elimine los espacios"
                ? <div className="error">{msg}</div>:null} name="message"/>
                  <FormInputGroupTextSpan></FormInputGroupTextSpan>
                </FormInputGroup>
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
        
      </ContactSection>
      </Formik>
    </div>
  )
}
