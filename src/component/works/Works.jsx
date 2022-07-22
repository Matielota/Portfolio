import React from 'react'
import WorkContent from '../worksContent/WorkContent'
import styled from "styled-components";
import { greatView } from "../../responsive.js";
import {  useSelector} from "react-redux";
import { Slide } from "react-awesome-reveal";

export default function Works() {
const color= useSelector((state)=>state.color)
const WorkContainer=styled.div`
  position: relative;
  ${greatView({marginLeft: "15rem"})}
`
const SectionWork=styled.aside`
  position: relative;
`
const HeaderWork=styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${color};
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
`
const TitleWork=styled.h2`
  position: relative;
`  
const AnimationWork=styled.span`
&:hover{
  color: #909096;
  font-size: 4rem}
`
const TextZoneWork=styled.div`
  position: relative;
  margin-left: 20px;
  width: 100%;
`
const TextZoneWorkp=styled.p`
  line-height: 1.5;
  position: relative;
  width:60%
`
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
    margin-top: 40px;
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
const SocialIconslia=styled.a`
  text-decoration: none;
  color:${color};
`
const MagicWallSection=styled.div`
  width: auto;
  margin-right: 10px;
  margin-left: 50px;
  position: relative;
`

const MagicWallCectionul=styled.ul`
  list-style: none;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-box;
  flex-wrap: wrap;
`  
  return (
    <WorkContainer id="WorkContainer">
      <SectionWork id="WorkContainer2">
            <HeaderWork id="WorkContainer3">
            <Slide direction={"right"} delay={200} cascade={true}  >
                <TitleWork id="WorkContainer4">
                  <AnimationWork id="WorkContainer5">M</AnimationWork>
                  <AnimationWork id="WorkContainer6">i</AnimationWork>
                  <AnimationWork  style={{opacity:"0"}} id="WorkContainer7">_</AnimationWork>
                  <AnimationWork id="WorkContainer8">P</AnimationWork>                  
                  <AnimationWork id="WorkContainer9">o</AnimationWork>
                  <AnimationWork id="WorkContainer10">r</AnimationWork>
                  <AnimationWork id="WorkContainer11">t</AnimationWork>
                  <AnimationWork id="WorkContainer12">a</AnimationWork>
                  <AnimationWork id="WorkContainer13">f</AnimationWork>
                  <AnimationWork id="WorkContainer14">o</AnimationWork>
                  <AnimationWork id="WorkContainer15">l</AnimationWork>
                  <AnimationWork id="WorkContainer16">i</AnimationWork>
                  <AnimationWork id="WorkContainer17">o</AnimationWork>  
                </TitleWork>
              </Slide>
            </HeaderWork>
        <TextZoneWork id="WorkContainer18">
                <TextZoneWorkp id="WorkContainer19"> 
                  Estos son los projectos en los que he trabajado, en back end utilizando Node.js sequelize MySQL,MongoDb
                  y en front con React, css clasico, styled components, JQuery, HTML, JS. Podran encontrar el enlace al deploy, como asi tambien
                  el enlace al github para ver el codigo.
                  Espero que les gusten!
                </TextZoneWorkp>
                <span>Si quieres conocer mas sobre mis trabajos escribeme</span>
                
                <ContactButton style={{marginBottom :"35px"}} id="WorkContainer20">
                 <SocialIconslia href="https://www.linkedin.com/in/matias-caceres00/" id="WorkContainer21">
                <ContactButtonDiv id="WorkContainer22">
                    <ContactButtonBg id="WorkContainer23"></ContactButtonBg>
                    <ContactButtonBase id="WorkContainer24"></ContactButtonBase>
                    <ContactButtonText id="WorkContainer25"> 
                      Mas Sobre mi
                    
                    </ContactButtonText>
                </ContactButtonDiv>    
                </SocialIconslia>
            </ContactButton>
                
        </TextZoneWork >
      </SectionWork>
      <MagicWallSection id="WorkContainer26">
          <MagicWallCectionul id="WorkContainer27">
            
            <WorkContent id="WorkContainer28" img={"https://ucarecdn.com/c56723ea-8f2e-42c2-965d-25621e0db538/imagenclickcare.jpg"} linkto={"https://deploy-click-care.vercel.app/"}/>
        
            <WorkContent id="WorkContainer29" img={"https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/2c/09/3e/2c093eec-11ec-b433-d631-7ae419ab65ff/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"} linkto={"https://climapp-matielota.vercel.app/"}/>
            
            <WorkContent id="WorkContainer30" img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/matielotasshop.jpg?alt=media&token=0436680e-1482-4cb5-8476-60cb6b8c7104"} linkto={"https://deploy-front-ecomerce.vercel.app/"}/>

            <WorkContent id="WorkContainer31" img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/1658259168646dog.png?alt=media&token=c961c03f-30dd-45f4-8ccc-8b9ed743da29"} linkto={"https://dogis-front-end.vercel.app/"}/>

            <WorkContent id="WorkContainer32" img={"https://firebasestorage.googleapis.com/v0/b/ecomerce-325cc.appspot.com/o/portfoliotapa.jpg?alt=media&token=543edb7e-97ba-4e9a-96b9-e216ba12fe1b"} linkto={"https://portfolio-matielota.vercel.app/"}/>
            
          </MagicWallCectionul>
      </MagicWallSection>
    </WorkContainer>
  )
}
