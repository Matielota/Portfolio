import React from 'react'
import "./texthome.css"
import m from "./letraMsi.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {} from"@fortawesome/free-brands-svg-icons"
import { useRef } from 'react'
import { useState } from 'react'
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive.js";

export default function TextHome() {
    const [color,setColor]=useState("#f50057")
    const [opacity,setOpacity]=useState("0")

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
const Rebotes = keyframes`
0%{opacity: 0;transform: scale(0.3) translate3d(0,0,0);}
20%{transform: scale(1.5)}
40%{opacity: 0.9;transform: scale(0.6);}
60%{transform: scale(1.2);}
80%{opacity: 1;transform: scale(0.8);}
100%{opacity: 1;transform: scale(1) translate3d(0,0,0);}
`
const TextZoneSpan=styled.span`
   
    &:hover,
    &:focus{
    display: inline-block;
    color: #f50057;
    transform: scale(1.3);
    animation-duration: 1s;
    animation: ${Rebotes} 1s linear;
`

    

    

    





  return (
      <SectionHome>
        <TextZone >
            <TextZoneh1>
            <TextZoneSpan >H</TextZoneSpan>
            <TextZoneSpan >o</TextZoneSpan>
            <TextZoneSpan >l</TextZoneSpan>
            <TextZoneSpan >a</TextZoneSpan>
            <br/>
            <TextZoneSpan >Y</TextZoneSpan>
            <TextZoneSpan >o</TextZoneSpan>
            <TextZoneSpan style={{opacity:"0"}}>_</TextZoneSpan> 
            <TextZoneSpan >s</TextZoneSpan> 
            <TextZoneSpan >o</TextZoneSpan> 
            <TextZoneSpan >y</TextZoneSpan>
            <TextZoneSpan style={{opacity:"0"}}>_</TextZoneSpan>
            <img src={m} alt="Matielota" className='img-home' />
            <TextZoneSpan >a</TextZoneSpan>
            <TextZoneSpan >t</TextZoneSpan>
            <TextZoneSpan >i</TextZoneSpan>
            <TextZoneSpan >a</TextZoneSpan>
            <TextZoneSpan >s</TextZoneSpan> 
            <TextZoneSpan >,</TextZoneSpan>
            <br/>
            <TextZoneSpan >w</TextZoneSpan>
            <TextZoneSpan >e</TextZoneSpan>
            <TextZoneSpan >b</TextZoneSpan> 
            <TextZoneSpan style={{opacity:"0"}}>_</TextZoneSpan> 
            <TextZoneSpan >d</TextZoneSpan> 
            <TextZoneSpan >e</TextZoneSpan>
            <TextZoneSpan >v</TextZoneSpan>
            <TextZoneSpan >e</TextZoneSpan> 
            <TextZoneSpan >l</TextZoneSpan>
            <TextZoneSpan >o</TextZoneSpan>
            <TextZoneSpan >p</TextZoneSpan> 
            <TextZoneSpan >e</TextZoneSpan>
            <TextZoneSpan >r</TextZoneSpan>
            </TextZoneh1>
            <p className='gray-text' >Full Stack Web Developer</p>
            <br />
            <button className='contact-button' >
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Contactame!</span>
                </div>    
            </button>
            
        </TextZone>
        <div className="scroll-down" color={color}>
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
        <div className="scroll-down scroll-down--left">
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
       <div ></div>
      </SectionHome>
  )
}
