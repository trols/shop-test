import { gsap} from 'gsap'
import React from "react";
const { useEffect, useRef } = React;

function Animation(){

const ok = useRef()

 useEffect(() => {
    gsap.to(ok.current, {
      duration: 3,
      delay:4,
      scale:1.2, 
      ease: 'bounce'
    })
  })
    return(
        <div className='up' ref={ok}>
            <p className='up-white'>
                  Скидка 10% с промокодом : 
                  <span className='ok'> OK</span>
            </p>
        </div>
    )
}
export default Animation;