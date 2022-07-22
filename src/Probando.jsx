import React from 'react'
import {faHtml5,faReact,faNodeJs,faCss3,faBootstrap,faSass,faJsSquare,faPython,faTypo3} from"@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled,{ keyframes } from "styled-components";
import { useSelector} from "react-redux";
import { greatView } from './responsive';
import { SiMongodb,SiTypescript,SiJquery,SiPostgresql,SiMysql,SiAmazonaws,SiGitlab,SiStyledcomponents,SiFirebase } from 'react-icons/si';

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
    height:100vh;
    position: relative;
    list-style: none;
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    display:none;
    ${greatView({display:"block"})}
     animation: ${Rotate} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate} 60s ease-in-out 1s infinite ;
    -o-animation: ${Rotate} 60s ease-in-out 1s infinite ;
`
const SocialIconsli=styled.div`
    width: 50px;
    font-size: 5rem;
`
const SocialIconslia=styled.a`
    position:absolute;
    text-decoration: none;
    color:${color};
    display: inline-block;
    animation: ${Rotate2} 35s ease-in-out 1s infinite alternate-reverse;
    -webkit-animation: ${Rotate2} 60s ease-in-out 1s infinite ;
    -o-animation: ${Rotate2} 60s ease-in-out 1s infinite ;
    &:hover{
    color:#909096;}
` 

  return (
    <div>
        <SocialIcons>
            <SocialIconslia style={{right:"35%", top: "42%", fontSize: "5rem",}}>
            <p>
            AGILE
            <br />
            SCRUM  
            </p>
            </SocialIconslia>
            <SocialIconsli>
            <SocialIconslia style={{right:"48%",top: "16%"}}>
                <FontAwesomeIcon icon={faHtml5} />
            </SocialIconslia>
            <SocialIconslia style={{left:"38%", top: "22%"}}>
                <SiMysql/>
                </SocialIconslia>

                <SocialIconslia style={{right:"38%", top: "22%"}}>
                <SiGitlab/>
                </SocialIconslia>
            <SocialIconslia style={{left:"31%", top: "30%"}}>
                <FontAwesomeIcon icon={faReact} />
                </SocialIconslia>
                <SocialIconslia style={{right:"31%", top: "30%"}}>
                <FontAwesomeIcon icon={faNodeJs}/>
                </SocialIconslia>
                <SocialIconslia style={{left:"25%", top: "40%"}}>
                 <FontAwesomeIcon icon={faCss3}   />
                </SocialIconslia>
                <SocialIconslia style={{right:"25%", top: "40%"}}>
                <SiStyledcomponents/>
                </SocialIconslia>

                <SocialIconslia style={{left:"18%", top: "49%"}}>
                <FontAwesomeIcon icon={faSass}/>
                </SocialIconslia>

                <SocialIconslia style={{right:"18%", top: "49%"}}>
                <SiJquery/>
                </SocialIconslia>

                <SocialIconslia style={{left:"25%", top: "58%"}}>
                <FontAwesomeIcon icon={faPython}/>
                </SocialIconslia> 

                <SocialIconslia style={{right:"25%", top: "58%"}}>
                <SiAmazonaws/>
                </SocialIconslia>

                <SocialIconslia style={{left:"31%", top: "68%"}}>
                <SiMongodb/>
                </SocialIconslia>

                <SocialIconslia style={{right:"31%", top: "68%"}}>
                <SiPostgresql/>
                </SocialIconslia>

                <SocialIconslia style={{left:"40%", top: "76%"}}>
                <FontAwesomeIcon icon={faBootstrap}/>
                </SocialIconslia>

                <SocialIconslia style={{right:"40%", top: "76%"}}>
                <SiFirebase/>
                </SocialIconslia>

                <SocialIconslia style={{right:"46%", top: "84%"}}>
                <SiTypescript/>
                </SocialIconslia>
    </SocialIconsli>
        </SocialIcons>
    </div>
  )
}