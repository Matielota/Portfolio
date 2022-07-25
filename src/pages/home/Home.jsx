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
import styled from "styled-components";
import { greatView } from "../../responsive";
import { useDispatch, useSelector } from 'react-redux'
import {setColor,setSettings} from "../../redux/action"
import Setting from '../../Setting'

import {faGear} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const dispatch=useDispatch()
const color= useSelector((state)=>state.color)
const config= useSelector((state)=>state.setting)
console.log(config)

const onClick = (value)=>{
  dispatch(setColor(value))
}

const FirstComponent=styled.div`
  position: relative;
  max-width: fit-content;
}
`
const SoundContainer=styled.header`
  width: 98%;
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

const SettingContainer=styled.div`
    position: fixed;
    bottom:100px;
    right:100px;
    background-color: beige;
    height:10vh;
    widht:10vh;
    &:hover{
      color:red;
    }
`
const SocialIconslia=styled.div`
bottom:20px; 
right:30px; 
position:fixed;
width: 50px;
font-size: 3rem;

text-decoration: none;
z-index:10;
color:${color};

&:hover{
    color:#909096;
}

` 
const ContainerAll=styled.div`
${greatView({width:"90%"})}
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
    setStateNav(menuDisplay)  }
}

const settings=(value)=>{
  dispatch(setSettings(value))
  console.log(config)
}
function click(e){
  dispatch(setSettings(e))
  console.log(config)
}

return (
    <ContainerAll>
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
            opacity: 0.3,
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
            value: 0.3,
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
    

        <SocialIconslia onClick={()=>settings("open")}>
            <FontAwesomeIcon icon={faGear} />
        </SocialIconslia>
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
        {config === "open"?<Setting />:null}
       
        
        {stateNav==="open"? <SideBar sideNav={stateNav}/> : <SideBar sideNav={stateNav}/>}
        <TextHome></TextHome>
        <Works></Works>
        <About></About>
        <Contact></Contact>
    </FirstComponent>
    </ContainerAll>
  )
}
