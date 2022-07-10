import React from 'react'
import "./texthome.css"
import m from "./letraMsi.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {} from"@fortawesome/free-brands-svg-icons"
import { useRef } from 'react'



export default function TextHome() {
    let ap = useRef(null); let aq = useRef(null);let txt = useRef(null)
    let a = useRef(null); let b = useRef(null);let c = useRef(null) ;let d= useRef(null) ; let e= useRef(null)
    let f = useRef(null) ;let g = useRef(null)
    let h = useRef(null); let i = useRef(null);let j = useRef(null) ;let k= useRef(null) ;let l = useRef(null) ;let m1 = useRef(null)
    let n = useRef(null); let o = useRef(null);let p = useRef(null) ;let q= useRef(null) ;let r = useRef(null) ;let s = useRef(null)
    let t = useRef(null); let u = useRef(null);let v = useRef(null) ;let w= useRef(null) ;let x = useRef(null) ;let y = useRef(null)
    let z = useRef(null); let aa = useRef(null);let ab = useRef(null) ;let ac= useRef(null) ;let ad = useRef(null) ;
    let grayText = useRef(null); let buttonHome = useRef(null)

  

function onClick(ref,time){
    window.setTimeout(function() {
        if(ref === grayText || ref === buttonHome || ref === txt){
            ref.current.style.opacity="1" 
            ref.current.classList.add("greyText")
        }else{
        ref.current.style.opacity="1"
        ref.current.classList.add("letters")}
    }, (600 + time*150));
       
    }

  return (
      <section id="section-home" className='section-home'>
        <div className="text-zone" style={{opacity:"0"}} ref={txt} onClick={onClick(txt,0)}>
            <h1>
            <span style={{opacity:"0"}} ref={ap} onClick={onClick(ap,0)}>H</span>
            <span style={{opacity:"0"}} ref={a} onClick={onClick(a,1)}>o</span>
            <span style={{opacity:"0"}} ref={b} onClick={onClick(b,2)} >l</span>
            <span style={{opacity:"0"}} ref={c} onClick={onClick(c,3)}>a</span>
            <br/>
            <span style={{opacity:"0"}} ref={d} onClick={onClick(d,4)}>Y </span>
            <span ref={f} style={{opacity:"0"}} onClick={onClick(f,5)} >o</span>
            <span ref={g} style={{opacity:"0"}}>_</span> 
            <span ref={h} style={{opacity:"0"}} onClick={onClick(h,7)}>s</span> 
            <span ref={i} style={{opacity:"0"}} onClick={onClick(i,8)}>o</span> 
            <span ref={j} style={{opacity:"0"}} onClick={onClick(j,9)}>y</span>
            <span ref={k} style={{opacity:"0"}}>_</span>
            <img src={m} alt="Matielota" className='img-home' ref={l} style={{opacity:"0"}} onClick={onClick(l,11)}/>
            <span ref={aq} style={{opacity:"0"}} onClick={onClick(aq,12)}>a</span>
            <span ref={m1} style={{opacity:"0"}} onClick={onClick(m1,13)}>t</span>
            <span ref={n} style={{opacity:"0"}} onClick={onClick(n,14)}>i</span>
            <span ref={o} style={{opacity:"0"}} onClick={onClick(o,15)}>a</span>
            <span ref={p} style={{opacity:"0"}} onClick={onClick(p,16)}>s</span> 
            <span ref={q} style={{opacity:"0"}} onClick={onClick(q,17)}>,</span>
            <br/>
            <span ref={r} style={{opacity:"0"}} onClick={onClick(r,18)}>w</span>
            <span ref={s} style={{opacity:"0"}} onClick={onClick(s,19)}>e</span>
            <span ref={t} style={{opacity:"0"}} onClick={onClick(t,20)}>b</span> 
            <span ref={u} style={{opacity:"0"}}>_</span> 
            <span ref={v} style={{opacity:"0"}} onClick={onClick(v,22)}>d</span> 
            <span ref={w} style={{opacity:"0"}} onClick={onClick(w,23)}>e</span>
            <span ref={x} style={{opacity:"0"}} onClick={onClick(x,24)}>v</span>
            <span ref={y} style={{opacity:"0"}} onClick={onClick(y,25)}>e</span> 
            <span ref={z} style={{opacity:"0"}} onClick={onClick(z,26)}>l</span>
            <span ref={aa} style={{opacity:"0"}} onClick={onClick(aa,27)}>o</span>
            <span ref={ab} style={{opacity:"0"}} onClick={onClick(ab,28)}>p</span> 
            <span ref={ac} style={{opacity:"0"}} onClick={onClick(ac,29)}>e</span>
            <span ref={ad} style={{opacity:"0"}} onClick={onClick(ad,30)}>r</span>
            </h1>
            <p className='gray-text' ref={grayText} style={{opacity:"0"}} onClick={onClick(grayText,33)}>Full Stack Web Developer</p>
            <br />
            <button className='contact-button' ref={buttonHome} style={{opacity:"0"}} onClick={onClick(buttonHome,36)}>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Contactame!</span>
                </div>    
            </button>
        </div>
        <div className="scroll-down">
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
        <div className="scroll-down scroll-down--left">
            <span>scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="scroll-down-icon"/>
        </div>
       <div ></div>
      </section>
  )
}
