import React from "react";
import { useState } from 'react';
import { dataImages } from "../data/dataImages"
import Filter from "./Filter/Filter";




function Images(){

    const[about,setAbout]=useState(0);
    const{photo,text,category}= dataImages[about];
    

const previousItem = () => {
        setAbout ((item => {
          item -- ;
          if (item < 0 ) {
            item = dataImages.length -1;
          }
          return item;
        }))
        
      }
    
const nextItem = () => {
        setAbout (( item => {
            item ++;
            if (item > dataImages.length -1 ) {
              item = 0;
            }
            return item;
        }))
      }
      
    return(
        <div className="photo-text-button">


           <span className="about-us">{text}</span>
                <div className="photo-button-images">
              <button onClick={previousItem} className='buttonLeft'>
                <img src='https://img.icons8.com/ios-glyphs/344/chevron-left.png' width='35px' alt="foto-about"/>
              </button>
                <img className="" src={ photo } width="auto" height="400px"alt="about"/>
              <button onClick={nextItem} className='buttonRight'>
                <img src="https://img.icons8.com/ios-glyphs/344/chevron-right.png" width='35px' alt="foto-about"/>
              </button>
                </div>
            
        <div className="button-images"><span className="rt">{<Filter key={category}category={category}/>}</span></div>
 
        </div>

    )
}
export default Images;