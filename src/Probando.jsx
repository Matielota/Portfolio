import React from 'react'
import {faHtml5,faReact,faNodeJs,faCss3,faBootstrap,faSass,faJsSquare,faPython,faTypo3} from"@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled,{ keyframes } from "styled-components";
import { useSelector} from "react-redux";
import { greatView } from './responsive';
import { SiMongodb,SiTypescript,SiJquery,SiPostgresql,SiMysql,SiAmazonaws,SiGitlab,SiStyledcomponents,SiFirebase,SiJsonwebtokens,SiSocketdotio ,SiRedux} from 'react-icons/si';
import { TbBrandReactNative} from 'react-icons/tb';
export default function Probando() {
    const color= useSelector((state)=>state.color)

    const Animation=keyframes`
0%{opacity:0.8}
20%{opacity:0.5}
40%{opacity:0.6}
60%{opacity:0.4}
80%{opacity:0.7}
100%{opacity:1}
`
const Rotate =keyframes `
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
`
const Rotate2 =keyframes `
    0%{transform: rotate(360deg)}
    100%{transform: rotate(0deg)}
`
const SocialIcons=styled.div`
    margin: 3% 0 0 10%;
    height:660px;
    width:660px;
    position: relative;
    list-style: none;
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    display:none;
    ${greatView({display:"block"})}
     animation: ${Rotate} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate} 35s ease-in-out 1s infinite alternate-reverse ;
`
const SocialIconsli=styled.div`
    width: 50px;
    font-size: 5rem;
`
const SocialIconslia=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ; 
    &:hover{
    color:#909096;}
` 
const SocialIconsliSkill=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    transform: rotate(315deg);
     animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ; 
    &:hover{
    color:#909096;}
` 
const SocialIconsliChange=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    transform: rotate(315deg);
     animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ; 
    &:hover{
    color:#909096;}
` 
const SocialIconslire=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    transform: rotate(45deg);
     animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ; 
    &:hover{
    color:#909096;}
` 
const SocialIconsliEm=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    transform: rotate(45deg);
     animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ;
    -o-animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse ; 
    &:hover{
    color:#909096;}
` 
const Rotate3 =keyframes `
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
`
const SocialIconsliPuedenGirar=styled.p`
    position:absolute;
    text-decoration: none;
    color:${color};
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: inline-block;
    transform: rotate(45deg);
     animation: ${Rotate3} 5s ease-in-out 1s infinite ;
    -webkit-animation: ${Rotate3} 5s ease-in-out 1s infinite  ;
    -o-animation: ${Rotate3} 5s ease-in-out 1s infinite ; 
    &:hover{
    color:#909096;}
` 
  return (
    <div>
        
        <SocialIcons>
            
            <SocialIconslia style={{left:"270px", top: "340px", fontSize: "3.5rem"}}>
            SCRUM  
            </SocialIconslia>

            <SocialIconsliSkill style={{left:"-30px", top: "100px", fontSize: "2rem"}}>
            Work Team
            </SocialIconsliSkill>
            <SocialIconsliChange style={{right:"-100px", top: "580px", fontSize: "2rem"}}>
            Resolution
            </SocialIconsliChange>
            <SocialIconslire style={{right:"-70px", top: "120px", fontSize: "2rem"}}>
            Resilience
            </SocialIconslire>
            <SocialIconsliEm style={{left:"20px", bottom: "30px", fontSize: "2rem"}}>
            Empathy
            </SocialIconsliEm>
            {/* //base del cuadro */}
            <SocialIconsli>
            <SocialIconslia style={{left:"0",top: "324px"}}>
                <FontAwesomeIcon icon={faHtml5} />
            </SocialIconslia>
            <SocialIconslia style={{left:"324px", top: "0"}}>
                <SiGitlab/>
            </SocialIconslia>
            <SocialIconslia style={{left:"648px", top: "324px"}}>
                <SiTypescript/>
            </SocialIconslia>
            <SocialIconslia style={{left:"324px", top: "648px"}}>
            <SiSocketdotio/>
                </SocialIconslia>

            {/* top/left del cuadro */}
            <SocialIconslia style={{left:"160px", top: "80px"}}>
                <FontAwesomeIcon icon={faNodeJs}/>
            </SocialIconslia>
            <SocialIconslia style={{left:"60px", top: "190px"}}>
                <FontAwesomeIcon icon={faCss3}   />
            </SocialIconslia>
            {/* bot/left del cuadro */}
            <SocialIconslia style={{left:"160px", top: "568px"}}>
                <SiStyledcomponents/>
            </SocialIconslia>
            <SocialIconslia style={{left:"60px", top: "458px"}}>
                <FontAwesomeIcon icon={faSass}/>
            </SocialIconslia>
            {/* bot/right del cuadro */}
            <SocialIconslia style={{left:"488px", top: "568px"}}>
                <SiJquery/>
            </SocialIconslia>
            <SocialIconslia style={{left:"588px", top: "458px"}}>
                <FontAwesomeIcon icon={faPython}/>
            </SocialIconslia> 
            {/* top/right del cuadro */}
            <SocialIconslia style={{left:"488px", top: "80px"}}>
                <SiAmazonaws/>
            </SocialIconslia>
            <SocialIconslia style={{left:"588px", top: "190px"}}>
                <SiMongodb/>
            </SocialIconslia>
            {/* base dentro del cuadro */}
            <SocialIconslia style={{left:"110px", top: "324px"}}>
                <SiPostgresql/>
            </SocialIconslia>
            <SocialIconslia style={{left:"538px", top: "324px"}}>
                <FontAwesomeIcon icon={faBootstrap}/>
            </SocialIconslia>
            <SocialIconslia style={{left:"324px", top: "110px"}}>
                <SiFirebase/>
            </SocialIconslia>
            <SocialIconslia style={{left:"324px", top: "538px"}}>
                <SiMysql/>
            </SocialIconslia>
            <SocialIconsliPuedenGirar style={{left:"170px",top: "190px"}}>
                <SiJsonwebtokens/>
            </SocialIconsliPuedenGirar>
            <SocialIconsliPuedenGirar style={{left:"478px",top: "458px"}}>
            <FontAwesomeIcon icon={faReact} />
            </SocialIconsliPuedenGirar>
            <SocialIconsliPuedenGirar style={{left:"478px",top: "190px"}}>
                <SiRedux/>
            </SocialIconsliPuedenGirar>
            <SocialIconsliPuedenGirar style={{left:"170px",top: "458px"}}>
                <TbBrandReactNative/>
            </SocialIconsliPuedenGirar>
            </SocialIconsli>
        </SocialIcons>
    </div>
  )
}
