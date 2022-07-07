import React from 'react'
import "./about.css";
import TagCanvas from 'tag-canvas';
import { blue } from '@material-ui/core/colors';
import { useRef } from 'react';

export default function About() {
    let canvasArray= useRef(null)
    window.onload = function() {
        try {
            TagCanvas.reverse = true;
            TagCanvas.noSelect = "true";
            TagCanvas.wheelZoom = false;
            TagCanvas.textColour = "#f50057";
            TagCanvas.textHeight = 26;
            TagCanvas.Start('myCanvas');
         
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };

  return (
    <div>
      <section className="section-about">
        <div className="text-zone-about">
            <div className="header-about">
                <h2>Sobre mi:</h2>
            </div>
            <p>
                Desde pequeño veo las cosas desde el punto de vista logico, tal vez por esto es que estudie
                Matematicas, pues en ese mundo todo se resuelve si haces los procedimientos correctos segun la logica.
                En este sentido es que me involucre en el mundo tecnologico, estudiando ingeniera de sistemas en donde
                la logica es lo mas importante. 
            </p>
            <br/>
            <p>
                Puedo desarrollar proyectos trabajando tanto en el back end, en donde disfruto de llevar las riendas 
                de la informacion, permitiendo al usuario un flujo correcto en su experiencia.
                Como asi tambien puedo desarrollarme en el front end me gusta crear sitios que se luzcan, que atraigan 
                las miradas para que los usuarios sientan que deben visualizar todo el contenido sin perderse de nada. 
                Es por ello que me encuentro perfeccionando mas y mas mis habilidades para lograr este cometido!
            </p>
            <br />
            <p>
            ¿Lo he logrado contigo?¿Te gustaria llevar tus paginas al proximo nivel trabajando juntos?
            </p>
        </div>
        <div className="skills-charts">
            <div className="myCanvasContainer">
                <canvas width="700" height="700" id="myCanvas" ref={canvasArray}>
                <ul>
                    <li><a href="#" target="_blank"> React js</a></li>
                    <li><a href="#" target="_blank"> Node JS</a></li>
                    <li><a href="#" target="_blank"> React Native</a></li>
                    <li><a href="#" target="_blank"> HTML</a></li>
                    <li><a href="#" target="_blank"> CSS</a></li>
                    <li><a href="#" target="_blank"> SQL</a></li>
                    <li><a href="#" target="_blank"> Bootstrap</a></li>
                    <li><a href="#" target="_blank"> Express</a></li>
                    <li><a href="#" target="_blank"> Sequelize</a></li>
                    <li><a href="#" target="_blank"> Mongo DB</a></li>
                    <li><a href="#" target="_blank"> TypeScript</a></li>
                    <li><a href="#" target="_blank"> JQuery</a></li>
                    <li><a href="#" target="_blank"> Git</a></li>
                    <li><a href="#" target="_blank"> PHYTON</a></li>
                    <li><a href="#" target="_blank"> ES5/ES6</a></li>
                   
                </ul>
                </canvas>
            </div>
        </div>
        <div className="fake-big-4">About</div>
        <div className="fake-big-3">Skills</div>
      </section>
    </div>
  )
}
