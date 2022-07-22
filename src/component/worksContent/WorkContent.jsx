import React from 'react'
import "./workcontent.css"
import styled,{ keyframes } from "styled-components";
import { SiVercel,SiGithubactions} from 'react-icons/si';
import { useSelector } from 'react-redux';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

export default function WorkContent({img,linkto,linkto2,textTop,textTop2,title}) {
  const color= useSelector((state)=>state.color)




const ProjectTitle=styled.h1`
margin-top:10px;
height:50px;
text-align:center;
justify-content:center;
items-align:center;
`
const DataContainer=styled.div`
height: 350px;
object-fit: fill;
`
const ButtonsContainer=styled.div`
height:75px;
  bottom:15%
  background-color:gray;
  font-size:3rem;
  color: ${color};
  margin-left:15%;
  margin-Top:10px;
`
const ImgContainer=styled.img`
border: 1px solid;
border-radius:50%;
height:330px;
width:330px;
margin-top:10px;
margin-left:10%;
`
const TextTop=styled.div`
position:absolute;
font-size:1.4rem;
top: 100px;
height: auto;
width: 330px;
background-color:${color};
text-align:center;
opacity:0;
border-radius: 10px;
`
const TextTop2=styled.div`
position:absolute;
bottom: 20px;
font-size:1.3rem;
right: 0;
height: auto;
width: 230px;
background-color:${color};
opacity:0;
border-radius: 10px;
`

const AnimationData=keyframes`
0%{transform:  translateX(-330px)}
100%{transform: translateX(0px);}
`
const AnimationData2=keyframes`
0%{transform:  translateX(400px)}
100%{transform: translateX(0px);}
`
const LiMagicWall=styled.div`
  width: 420px;
  height: 500px;
  position: relative;
  display: list-item;
  overflow: hidden;
  margin-left:50px;
  margin-bottom:50px;
  &:hover ${TextTop}{opacity:1; animation:${AnimationData} 3s}
  &:hover ${TextTop2}{opacity:1; animation:${AnimationData2} 3s}
`
const Links=styled.a`
text-decoration: none;
color:${color};
&:hover{
  color:#909096;
}
`
  return (
    <div>
      <LiMagicWall>
             <TextTop> {textTop}</TextTop>
             <TextTop2> {textTop2}</TextTop2>
                <ProjectTitle>{title}</ProjectTitle>
                    <DataContainer> 
                    <ImgContainer src={img} alt="" />


                    </DataContainer>
           
                <ButtonsContainer>
                  <Links href={linkto}>
                    <SiVercel style={{zIndex:"35"}}/>
                  </Links>
                  <Links href={linkto2}>
                    <SiGithubactions style={{marginLeft:"20px"}}/>
                  </Links>
                </ButtonsContainer>
      </LiMagicWall>
    </div>
  )
}
