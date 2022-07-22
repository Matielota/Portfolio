import React from 'react'
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
import styled,{ keyframes } from "styled-components";
import { greatView } from "../../responsive";
import { useDispatch, useSelector } from 'react-redux'
import {setColor} from "../../redux/action"


export default function Home() {
  const dispatch=useDispatch()
const color= useSelector((state)=>state.color)
const onClick = (value)=>{
  dispatch(setColor(value))
}
const FirstComponent=styled.div`
  position: relative;
  &:after{
    content: '<html>';
    position: absolute;
    top: 20px;
    left: 10px;
    margin-left: 0rem;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
    ${greatView({top: "50px",left: "200px"})}
  }&:before{
  content: '<body>';
  position: absolute;
  top: 90px;
  left: 10px;
  font-size: 1.2rem;
  font-family: 'La Belle Aurore', cursive;
  color: #666565;
  letter-spacing: 3px;
  ${greatView({top: "80px",left: "200px"})}
}
`
const SoundContainer=styled.header`
  width: 95%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  ${greatView({justifyContent: "flex-end"})}
`
const Soundid=styled.div`
  font-size: 2rem;
  padding: 7px;
  background-color: #1b1b1b;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #fff;
`
const OnOff=styled.div`
  cursor: pointer;
  margin-left: 5px;
`
const Off=styled.span`
  font-size: 2rem;
  color: ${color};
  display: none;
`
const On=styled.span`
  font-size: 2rem;
  color: #08fdd8;
`
const ButtonsContainer=styled.div`
  font-size: 2rem;
  padding: 10px;
  background-color: #181818;
  color: #fff;
  cursor: pointer;
  display:block;
  ${greatView({display:"none"})}
`
const Times=styled.div`
  display:block
`


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

  var menuDisplay= "close"
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
function handleMenu(){
  menuDisplay === "close"? menuDisplay ="open" : menuDisplay="close"
  console.log(menuDisplay)
  if(menuDisplay === "open"){
    setStateNav(menuDisplay)
  } else if(menuDisplay === "close"){
    setStateNav(menuDisplay)
    
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
            value: color,
          },
          links: {
            color: color,
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
    <FirstComponent>
       <SoundContainer>
          <Soundid>
              <FontAwesomeIcon icon={faSoundcloud} style={{fontSize: "2rem",margin: "7px",color: "#08fdd8"}} ref={soundCloudAudio}/>
              <span>Sound</span>
              <OnOff>
                <Off onClick={()=>soundTrack("off")} ref={offSpan}>off</Off>
                <On  onClick={()=>soundTrack("on")} ref={onSpan}>on</On>
              </OnOff>
          </Soundid>
          <ButtonsContainer>
              <FontAwesomeIcon icon={faBars}  className="bars" ref={barsIcon} onClick={handleMenu}/>
          </ButtonsContainer>
        </SoundContainer>
        
        {stateNav==="open"? <SideBar sideNav={stateNav}/> : <SideBar sideNav={stateNav}/>}
        <TextHome></TextHome>
        <Works></Works>
        <About></About>
        <Contact></Contact>
    </FirstComponent>
    </div>
  )
}
