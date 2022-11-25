
import Images from "./Images";
import React from "react";
import { gsap } from "gsap";
const { useEffect, useRef } = React;

function MainPage(){

   const anim = useRef();
    useEffect(() => {
    let animation = gsap.context(() => {
       
        gsap.from(".btnPageTwo", { y:-1000, ease: 'bounce', duration:4 });
        gsap.from(".secondHead ", { x:-500, duration:1, stagger:.7 , opacity:0});
    }, anim);
    return () => animation.revert();
    });
   
return(
        <div className="App" ref={anim}>

            <h2 className="firstHead">ИНТЕРНЕТ-МАГАЗИН ПРОДУКТОВ</h2>
            <h2 className="secondHead">ДОСТАВКА 24/7</h2>
            
            <div className="photo-text-button">
               <img className="main-photo" 
               src="https://img.freepik.com/premium-photo/collection-vegetables-isolated-white-background_44074-1573.jpg?size=626&ext=jpg&ga=GA1.2.1287222821.1659992797&semt=sph" alt="about"/>
             </div>
 
              <a className="btnPageTwo " href="#PageTwo">Начать покупки</a>
 
                 <Images/>
         </div>
       )
    }
 export default MainPage;