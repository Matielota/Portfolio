import React from 'react'
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive.js";
import { useSelector} from "react-redux";
import Probando from '../../Probando';
import Prueba2 from '../../Prueba2.jsx';
export default function About() {
const color= useSelector((state)=>state.color)
const SectionAbout=styled.section`
    position: relative;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    ${greatView({marginLeft: "14rem"})}
  
`
const Animation_hover=keyframes`
  0%,   to {transform: translateY(0)}
  30% {transform: translateY(-30px)}
  60%{transform: translateX(30px)}
  100%{transform: translateZ(30px)}
`

const HeaderAbouth2=styled.h2`
  margin-left:30%;
  margin-right:30%;
  justify-content:center;
  top:0px;
  width:auto;
  font-size: 4rem;
  color: ${color};
  margin-bottom: 30px;
&:hover{
  color: #909096;
  animation-duration: 2s;
  animation: ${Animation_hover} 2s; 
`
const TextZoneAbout=styled.div`
  width: 100%;
  margin-left: 20px;
  position: relative;
  `

const TextZoneAboutp=styled.p`
  line-height: 1.5rem;
  margin-left:15%;
  margin-right:15%;
`
const Animate1= keyframes`
0%{transform:  translateX(50px)}
100%{transform: translateX(550px);}
`
const Skillscharts=styled.div`
  position: relative;
  margin-left: 20%;
  height:800px;
  width: 800%
  display:flex;
  flex-direction: column;
`
const SocialIcons=styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`
const HeaderAbouth3=styled.h2`
  margin-left:10%;
  top:20px;
  width:auto;
  font-size: 7rem;
  color: ${color};
  margin-bottom: 30px;
&:hover{
  color: #909096;
  animation-duration: 2s;
  animation: ${Animation_hover} 2s; 
`
  return (
    <div> 
      <SectionAbout>
           <TextZoneAbout>
                   
                         <HeaderAbouth2>Sobre mi:</HeaderAbouth2>
                   
                   <TextZoneAboutp>
                       Desde pequeño veo las cosas desde el punto de vista logico, tal vez por esto es que estudie
                       Matematicas, pues en ese mundo todo se resuelve si haces los procedimientos correctos segun la logica.
                       En este sentido es que me involucre en el mundo tecnologico, estudiando ingeniera de sistemas en donde
                        la logica es lo mas importante. 
                       Puedo desarrollar proyectos trabajando tanto en el back end, en donde disfruto de llevar las riendas 
                      de la informacion, permitiendo al usuario un flujo correcto en su experiencia.
                       Como asi tambien puedo desarrollarme en el front end me gusta crear sitios que se luzcan, que atraigan 
                     las miradas para que los usuarios sientan que deben visualizar todo el contenido sin perderse de nada. 
                      Es por ello que me encuentro perfeccionando mas y mas mis habilidades para lograr este cometido!
                     ¿Lo he logrado contigo?¿Te gustaria llevar tus paginas al proximo nivel trabajando juntos?

                     Las siguientes son algunas de las habilidades que he obtenido.
                  </TextZoneAboutp>
            </TextZoneAbout>
            <HeaderAbouth3 >Skills:</HeaderAbouth3>
            <Skillscharts>
              <Probando/>
              <Prueba2/> 
            </Skillscharts>
      </SectionAbout>
      </div>
  )
}
