import React from 'react'
import "./home.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import {faSoundcloud} from"@fortawesome/free-brands-svg-icons"
import SideBar from '../../component/sidebar/SideBar'
import TextHome from '../../component/textHome/TextHome'
import { useRef } from 'react'
import song from "./Night.mp3"
import { useState } from 'react'
import Works from '../../component/works/Works'
import About from '../../component/about/About'
import Contact from "../../component/Contact/Contact"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
  };
  let onSpan = useRef(null)
  let offSpan = useRef(null)
  let soundCloudAudio = useRef(null)
  let barsIcon = useRef(null)
  let timesIcon = useRef(null)
  
  let sideNav = "close";
  const [stateNav, setStateNav] = useState("")
  let state = {
    audio: new Audio(song),
    isPlaying: false,
  };
  function soundTrack(soundState){
    if (soundState === "off"){
      onSpan.current.style.display = 'block';
      offSpan.current.style.display = 'none';
      soundCloudAudio.current.style.color = "#08fdd8";
      state.audio.pause()
  }
  else if(soundState === 'on'){
      onSpan.current.style.display = 'none';
      offSpan.current.style.display = 'block';
      soundCloudAudio.current.style.color = "#f50057";
      state.audio.play()
  }
}
function handleMenu(navCondition){
  if(navCondition === "open"){
    timesIcon.current.style.display = "block"
    barsIcon.current.style.display = "none"
    setStateNav(navCondition)
  } else if(navCondition === 'close'){
    timesIcon.current.style.display = "none";
    barsIcon.current.style.display = "block";
    setStateNav(navCondition)
    
}
}



return (
    <div className='containerAll'>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f50057",
          },
          links: {
            color: "#f50057",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    >
      

    </Particles>
    <div className='primero'>
       <header className='sound-container'>
          <div id="sound">
              <FontAwesomeIcon icon={faSoundcloud} className="sound-cloud" ref={soundCloudAudio}/>
              <span>Sound</span>
              <div className="on-off">
                <span id="off" onClick={()=>soundTrack("off")} ref={offSpan}>off</span>
                <span id="on" onClick={()=>soundTrack("on")}ref={onSpan}>on</span>
              </div>
          </div>
          <div className="buttons-container">
              <FontAwesomeIcon icon={faBars}  className="bars" ref={barsIcon} onClick={()=>handleMenu("open")}/>
              <FontAwesomeIcon icon={faTimes} className="times" ref={timesIcon} onClick={()=>handleMenu("close")}/>
          </div>
        </header>
        
        {stateNav==="open"? <SideBar sideNav={stateNav}/> : <SideBar sideNav={stateNav}/>}
        <TextHome></TextHome>
        <Works></Works>
        <About></About>
        <Contact></Contact>
    </div>
    </div>
  )
}
