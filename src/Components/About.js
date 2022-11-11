import React from "react";
import { useState } from 'react';
import { dataAbout } from "../data/dataAbout"

function About(){

const[about,setAbout]=useState(0);
const{photo,text,word}= dataAbout[about];
    
const previousItem = () => {
        setAbout ((item => {
          item -- ;
          if (item < 0 ) {
            item = dataAbout.length -1;
          }
          return item;
        }))
        
      }
const nextItem = () => {
       setAbout (( item => {
            item ++;
            if (item > dataAbout.length -1 ) {
              item = 0;
            }
            return item;
        }))
      }
      
    return(
           <div className="photo-text-button">
           
<p className="about-us-text">{ text }</p>
<p className="about-us-word">{ word }</p>
<img className="photo-about" src={ photo } width="500px" height="auto"alt="about"/>

<div className="button-about">
  <button onClick={previousItem} className='btn-left'>
    <img src='https://img.icons8.com/ios-glyphs/344/chevron-left.png' width='35px' alt="foto-about"/>
  </button>
  <button onClick={nextItem} className='btn-right'>
    <img src="https://img.icons8.com/ios-glyphs/344/chevron-right.png" width='35px' alt="foto-about"/>
  </button>
</div>

</div>
)
}
export default About;