import React from 'react'
import styled,{ keyframes } from "styled-components";
import { useSelector} from "react-redux";
import { greatView } from './responsive';
import { setColor,setSettings } from './redux/action';
import { useDispatch } from 'react-redux';
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Setting() {
const dispatch=useDispatch()
const color= useSelector((state)=>state.color)
const SettingContainer=styled.div`
    position: fixed;
    bottom:80px;
    right:30px;
    height:300px;
    width:40px;
    border-radius:5px;
    opacity:1;
    z-index:20;
    background-color: rgb(29, 29, 29);
    outline: 2px solid ${color};
`
const Title=styled.p`
margin-left:5px;
font-size:1.2rem;
 margin-bottom:5px;
color:white;
`
const Colores=styled.button`
  border-radius:50%;
  margin-left:5px;
  margin-bottom:5px;
  height:30px;
  width:30px;
  border-color: transparent;
`
const Colores2=styled.button`
  position:fixed;
  bottom:85px;
  right:38px;
  border-radius:50%;
  height:30px;
  width:30px;
  border-color: gray;
  background-color: transparent;
`
const onClick=(value)=>{
dispatch(setColor(value))
}
const onClose=(value)=>{
  dispatch(setSettings(value))
  }
  return (
    <SettingContainer>
    <Colores style={{backgroundColor: "#3498db"}} onClick={()=>onClick("#3498db")}></Colores>
    <Colores style={{backgroundColor: "#3200ff"}} onClick={()=>onClick("#3200ff")}></Colores>
    <Colores style={{backgroundColor: "#fa6001"}} onClick={()=>onClick("#fa6001")}></Colores>
    <Colores style={{backgroundColor: "#00ee39"}} onClick={()=>onClick("#00ee39")}></Colores>
    <Colores style={{backgroundColor: "#f40000"}} onClick={()=>onClick("#f40000")}></Colores>
    <Colores style={{backgroundColor: "#00f7b5"}} onClick={()=>onClick("#00f7b5")}></Colores>
    <Colores style={{backgroundColor: "#f50057"}} onClick={()=>onClick("#f50057")}></Colores>
    <Colores2  onClick={()=>onClose("close")}>
      <FontAwesomeIcon icon={faTimes} style={{fontSize: "2rem",color: "red"}}/>
    </Colores2>
    
    </SettingContainer>
  )
}
