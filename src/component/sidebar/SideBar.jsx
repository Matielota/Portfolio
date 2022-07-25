import React from 'react'
import m from "./Mlleter.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGear} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub} from"@fortawesome/free-brands-svg-icons"
import { useRef } from 'react'
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive.js";
import { useDispatch, useSelector} from "react-redux";
import curriculum from "./CurriculumCaceresAldanaMatias.pdf"
import english from "./englishversion.pdf"
import axios from 'axios'
import {} from 'react-icons/si'

export default function SideBar({sideNav}) {
const color= useSelector((state)=>state.color)
const letraAzul= "https://ucarecdn.com/b1725547-880b-4c7c-87f0-8cd69a1be26c/letraMazulverdad.png"
const letraVioleta = "https://ucarecdn.com/5f6f870a-9624-481b-b57d-20e2436b3d82/letramVioleta.png"
const letraNaranja = "https://ucarecdn.com/472c9064-a09c-45f6-9db2-c9fe17cbe9a1/letramnaranja.png"
const letraVerde= "https://ucarecdn.com/22791674-57d2-4db0-8a07-ef7830ba8ff4/letramverde.png"
const letraRoja="https://ucarecdn.com/6e6b62b3-7462-4e8c-9dc5-fbb2ce760c6f/letramroja.png"
const letraVerdeFluor="https://ucarecdn.com/6ea30276-ce41-462c-84c8-8b60a1c422db/letraverdefluor.png"
const letraOriginal="https://ucarecdn.com/22794b69-fdb7-4fd7-86a0-f25e687d0b04/letramoriginal.png"
const Father=styled.div`
  position: relative;
  width: 100%;
  background-color: black;
`
const Aside=styled.aside`
  width: 100%;
  height: 0;
  position: fixed;
  top:0;
  left: 0;
  z-index:1;
  overflow:hidden; 
  background-color: black;
  ${greatView({width: "10%", height: "100%"})}
`
const AsideWrapper=styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${greatView({height: "80%"})}
`
const LogoSection=styled.div`
  min-height: 32vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: ${color};
  ${greatView({height: "25vh"})}
`
const Logo=styled.a`
  display: grid;
  place-items: center;
  text-decoration: none;
  background-color: transparent;
`
const LogoImg=styled.img`
  width: 150px;
  height: auto;
  border: none;
`
const LogoSpan1=styled.span`
  font-size:  1.7rem;
  color: ${color};
`
const LogoSpan2=styled.span`
  font-size:  1.7rem;
  color: ${color};
  margin-top: 25px;
  font-size: 17px;
  font-family: 'Times New Roman' Times, serif;
  ${greatView({marginLeft: "20px",marginBottom: "30px"})}
`
const AnimateFather=styled.div`
  position:relative;
`
const NavLinksa=styled.a`
  position:relative;
  width: 100%;
  display: block;
  text-align: center;
  line-height: 3rem;
  text-decoration: none;
  color: rgb(123, 119, 119);
  &:hover{
    color: ${color}
}
`
const Animate1= keyframes`
  0%{
      left: -100%;
  }
  50%,100%{
      left: 100%;
  }
`
const Animate2= keyframes`
  0%{
      left: 100%;
  }
  50%,100%{
      left: -100%;
  }
`
const AnimationSpan=styled.span`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,${color});
    animation: ${Animate1} 1s linear infinite;
`
const AnimationSpan2=styled.span`
    position: absolute;
    display: block;
    top: 50px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,${color});
    animation: ${Animate2} 1s linear infinite;
`
const AnimationSpan3=styled.span`
    position: absolute;
    display: block;
    top: 100px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,${color});
    animation: ${Animate1} 1s linear infinite;
`
const AnimationSpan4=styled.span`
    position: absolute;
    display: block;
    top: 150px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,${color});
    animation: ${Animate2} 1s linear infinite;
    
`
const Animation3= keyframes`
  0%{
      top: -100%;
  }100%{
      top: 100%;
  }
`
const Animation4= keyframes`
  0%{
      top: 100%;
  }100%{
      top: -100%;
  }
`
const AnimationSpanLogo=styled.span`
    transform: rotate(90deg);
    opacity:0;
    position: absolute;
    display: block;
    top: 0px;
    left: 95px;
    width: 100%;
    height: 3px;
    background: linear-gradient(180deg,transparent,${color});
    animation: ${Animation3} 1.5s linear infinite;
    ${greatView({opacity: "1"})}
`
const AnimationSpanLogo2=styled.span`
    transform: rotate(90deg);
    opacity:0;
    position: absolute;
    display: block;
    top: 0px;
    left: -92px;
    width: 100%;
    height: 3px;
    background: linear-gradient(180deg,transparent,${color});
    animation: ${Animation4} 1.5s linear infinite;
    ${greatView({opacity: "1"})}
`
const SocialIcons=styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`
const SocialIconsli=styled.div`
  width: 50px;
  font-size: 3rem;
`
const SocialIconslia=styled.a`
  text-decoration: none;
  color:${color};
  &:hover{
    color:#909096;
}
` 
  let asideClass = useRef(null)
 
  return (
    <Father>
      <Aside 
      style={(sideNav==="open"? {overflow: "visible", height: "100%"}:null)} 
      ref={asideClass}
      >
        <AsideWrapper>
            <LogoSection>
              <AnimationSpanLogo></AnimationSpanLogo>
                 <Logo href="/">
                    <LogoImg src={color === "#3498db"? letraAzul : color === "#3200ff" ? letraVioleta : 
        color === "#fa6001" ? letraNaranja : color === "#00ee39" ? letraVerde : color === "#f40000" ? 
        letraRoja : color === "#00f7b5" ? letraVerdeFluor : letraOriginal}  alt="" />
                    <LogoSpan1>Matielota</LogoSpan1>
                 </Logo>
                <LogoSpan2 className='profession'>Full Stack Developer</LogoSpan2>
                <AnimationSpanLogo2></AnimationSpanLogo2>
            </LogoSection>
            <AnimateFather >
            <NavLinksa href={curriculum} target="_blank" rel="noopener noreferrer" download="Curriculum Caceres Aldana Matias"> Curriculum español</NavLinksa>
            <AnimationSpan></AnimationSpan>
            <NavLinksa href={english} target="_blank" rel="noopener noreferrer" download="Curriculum Caceres Aldana Matias"> Curriculum English</NavLinksa>
            <AnimationSpan2></AnimationSpan2>
            <NavLinksa href='https://www.linkedin.com/in/matias-caceres00/'> Proyectos</NavLinksa>
            <AnimationSpan3></AnimationSpan3>
            <AnimationSpan4></AnimationSpan4>
            </AnimateFather>
            <SocialIcons>
                <SocialIconsli>
                    <SocialIconslia href="https://www.linkedin.com/in/matias-caceres00/">
                    <FontAwesomeIcon icon={faLinkedin}  className="social-media"/>
                    </SocialIconslia>
                </SocialIconsli>
                <SocialIconsli>
                    <SocialIconslia href="https://github.com/Matielota">
                    <FontAwesomeIcon icon={faGithub}  className="social-media"/>
                    </SocialIconslia>
                </SocialIconsli>
            </SocialIcons>
        </AsideWrapper>
      </Aside>
    </Father>
  )
}
