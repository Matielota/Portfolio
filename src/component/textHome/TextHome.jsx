import React from 'react'
import "./texthome.css"
import m from "./letraMsi.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import { Fade, JackInTheBox,Roll,Slide,Bounce } from "react-awesome-reveal";
import { useState } from 'react'
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive.js";
import { useDispatch, useSelector} from "react-redux";

export default function TextHome() {
const color= useSelector((state)=>state.color)
const SectionHome= styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    ${greatView({marginLeft: "15rem"})}
`
 const TextZone= styled.div`
    position: relative;
    padding-left: 1.5rem
`
const TextZoneh1=styled.h1`
    font-size: 3rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative;
    ${greatView({
        fontSize: "8rem",
        lineHeight: "130px",
        letterSpacing: "-6px",

    })}
`
const TextZoneSpan=styled.span`
    display: inline-block;
    &:hover,
    &:focus {color: ${color};transform: scale(1.3);}
`
const GrayText=styled.p`
    color: #8d8d8d;
    display: block;
    font-size: 1.6rem;
    letter-spacing: 4px;
    margin-top: 3rem;
    position: relative;
`
const ImgHome= styled.img`
    width: 50px;
    height: 60px;
    margin-left: 10px;
    background-color: transparent;
    ${greatView({width: "120px",height: "150px", marginLeft: "10px",backgrounColor: "transparent"})}
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

const ScrollDown=styled.div`
    position: absolute;
    right: 10px;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    display: block;
    font-size: 14px;
    color: ${color};
`
const ScrollDownLeft=styled.div`
    position: absolute;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    display: block;
    font-size: 14px;
    color: ${color};
    left: -30px;
`
const AnimationScroll=keyframes`
0%{transform:  translateX(-7px)}
100%{transform: translateX(7px);}
`
const ScrollDownSpan=styled.div`
    display: inline-block;
    animation: ${AnimationScroll} .5s linear infinite alternate-reverse;
`
const SocialIconslia=styled.a`
  text-decoration: none;
  color:${color};
`
  return (
      <SectionHome key="SectionHome">
        
        <TextZone key="TextZone">
            <TextZoneh1 key="TextZoneh1">
            <Fade direction={"right"} delay={300} cascade={true} triggerOnce={true} >
                <div>
            <TextZoneSpan  key="TextZoneSpan1">H</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan2">o</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan3" >l</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan4">a</TextZoneSpan>
            </div>
            </Fade>
            <Fade direction={"up"} delay={1200} cascade={true} triggerOnce={true}>
            <div>
            <TextZoneSpan key="TextZoneSpan5">Y</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan6">o</TextZoneSpan>
                <span style={{opacity:"0"}}>_</span>
            <TextZoneSpan key="TextZoneSpan7">s</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan8">o</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan9">y </TextZoneSpan>
            <span style={{opacity:"0"}}>_</span>
            <ImgHome src={m} alt="Matielota"/>
            <TextZoneSpan key="TextZoneSpan10">a</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan11">t</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan13">i</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan14">a</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan15">s</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan16">,</TextZoneSpan>
            </div>
            </Fade>
            <Fade direction={"right"} delay={2000} cascade={true} triggerOnce={true} >
            <div>
            <TextZoneSpan key="TextZoneSpan17">w</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan18">e</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan19">b </TextZoneSpan> 
            <span style={{opacity:"0"}}>_</span>
            <TextZoneSpan key="TextZoneSpan20">d</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan21">e</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan22">v</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan23">e</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan24">l</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan25">o</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan26">p</TextZoneSpan> 
            <TextZoneSpan key="TextZoneSpan27">e</TextZoneSpan>
            <TextZoneSpan key="TextZoneSpan28">r</TextZoneSpan>
            </div>
            </Fade>
            </TextZoneh1>
            <Roll direction={"left"} delay={2800} cascade={true} triggerOnce={true} >
            <GrayText key="GrayText">Full Stack Web Developer</GrayText>
            </Roll>
            <br />
            <Roll direction={"left"} delay={2800} cascade={true} triggerOnce={true} >
            <Bounce direction={"left"} delay={2800} cascade={true} triggerOnce={true} >
            <ContactButton key="ContactButton">
                <SocialIconslia href="https://www.linkedin.com/in/matias-caceres00/" id="WorkContainer105">
                <ContactButtonDiv key="ContactButtonDiv">
                    <ContactButtonBg key="ContactButtonBg"></ContactButtonBg>
                    <ContactButtonBase key="ContactButtonBase"></ContactButtonBase>
                    <ContactButtonText key="ContactButtonText"> Contactame!</ContactButtonText>
                </ContactButtonDiv >   
                </SocialIconslia>
            </ContactButton>
            </Bounce>
            </Roll>
        </TextZone>
        <ScrollDown key="ScrollDown">
            <ScrollDownSpan key="ScrollDownSpan">scroll down</ScrollDownSpan>
            <FontAwesomeIcon icon={faArrowDown} style={{transform: "rotate(270deg)",marginLeft: "15px"}}/>
        </ScrollDown>
        <ScrollDownLeft key="ScrollDownLeft">
            <ScrollDownSpan key="ScrollDownSpan2" >scroll down</ScrollDownSpan>
            <FontAwesomeIcon icon={faArrowDown} style={{transform: "rotate(270deg)", marginLeft: "15px"}}/>
        </ScrollDownLeft>
      </SectionHome>
  )
}
