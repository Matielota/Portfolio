import React from 'react'
import {faHtml5,faReact,faNodeJs,faCss3,faBootstrap,faSass,faJsSquare,faPython,faTypo3} from"@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled,{ keyframes } from "styled-components";
import { useSelector} from "react-redux";
import { greatView } from './responsive';
import { SiMongodb,SiTypescript,SiJquery,SiPostgresql,SiMysql,SiAmazonaws,SiGitlab,SiStyledcomponents,SiFirebase } from 'react-icons/si';

export default function Prueba2() {
const color= useSelector((state)=>state.color)
const Rotate =keyframes `
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
`
const Rotate2 =keyframes `
    0%{transform: rotate(360deg)}
    100%{transform: rotate(0deg)}
`
const SocialIcons=styled.div`
    margin-left:10px;
    margin-top:30px;
    height:auto;
    width:auto;
    position: relative;
    list-style: none;
    margin-bottom: 30px;
    justify-content: center;
    opacity:1;
    overflow: hidden;
    font-size: 5rem;
    ${greatView({opacity:0,overflow: "visible"})}
`
const SocialIconslia=styled.a`
    text-decoration: none;
    color:${color};
    display: inline-block;
    &:hover{
    color:#909096;}
` 

  return (
    <div>
        <SocialIcons>
            <SocialIconslia >
                <FontAwesomeIcon icon={faHtml5} />
            </SocialIconslia>
            <SocialIconslia >
                <SiMysql/>
                </SocialIconslia>

                <SocialIconslia >
                <SiGitlab/>
                </SocialIconslia>
            <SocialIconslia >
                <FontAwesomeIcon icon={faReact} />
                </SocialIconslia>
                <SocialIconslia >
                <FontAwesomeIcon icon={faNodeJs}/>
                </SocialIconslia>
                <SocialIconslia >
                 <FontAwesomeIcon icon={faCss3}   />
                </SocialIconslia>
                <SocialIconslia >
                <SiStyledcomponents/>
                </SocialIconslia>

                <SocialIconslia >
                <FontAwesomeIcon icon={faSass}/>
                </SocialIconslia>

                <SocialIconslia >
                <SiJquery/>
                </SocialIconslia>

                <SocialIconslia >
                <FontAwesomeIcon icon={faPython}/>
                </SocialIconslia> 

                <SocialIconslia >
                <SiAmazonaws/>
                </SocialIconslia>

                <SocialIconslia >
                <SiMongodb/>
                </SocialIconslia>

                <SocialIconslia >
                <SiPostgresql/>
                </SocialIconslia>

                <SocialIconslia >
                <FontAwesomeIcon icon={faBootstrap}/>
                </SocialIconslia>

                <SocialIconslia >
                <SiFirebase/>
                </SocialIconslia>

                <SocialIconslia >
                <SiTypescript/>
                </SocialIconslia>
        </SocialIcons>
    </div>
  )
}
