
import React from "react";
import { useState } from "react"
import dataContact from "../data/dataContact";
import Social from "./Social";

function Contact(){

const[showText,setShowText]=useState(false);
const showTextClick=(element)=>{
element.showMore=!element.showMore 
      setShowText(!showText)
    }

    return(
            <div>
               <div className="page-contact">
                  <div className="icons"><Social/></div>
                     <p className="head-contact">Контакты</p>
                       <div className="par-foot">НАШ АДРЕС : Использован в учебных целях</div>
                       <br></br>
                       <iframe
                           width="520" 
                           height="400" 
                           frameborder="0"
                           scrolling="no" 
                           marginheight="0" 
                           marginwidth="0" 
                           id="gmap_canvas" 
                           src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%D0%9D%D0%95%D0%92%D0%A1%D0%9A%D0%98%D0%99%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20St%20Petersburg+(%D0%9E%D0%9A)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"title="iframe1">
                        </iframe>

                       {dataContact.map((element=>{
                       const{id,head,email,tel,showMore}=element;
                       return <div key={id}>
       
                          <p className="par-foot">{head}</p>
                          <p className="par-foot">{tel}</p>
                          <p className="mail">{showMore ? email:email.substring(0,18)}
                                <button className='more-less'onClick={()=>showTextClick(element)}>
                                         {showMore ? "...Свернуть": "...Развернуть"}
                                 </button>
                          </p>
                    </div>
}))}

                     <div className="page-contact">  
                        <form action="https://formspree.io/f/mpzbnday"  method="POST">
                            <p className="par-contact">Форма обратной связи</p>
                            <input id='name-contact' placeholder="Ваше имя..." type="text"  required />
                            <input id='name-contact' placeholder="Введите ваш Email..." type="email"  name="email"  required/>
                            <textarea id='name-contact' placeholder="Напишите сообщение..." type="text" name="message" required></textarea>
                            <button className='but-contact' name="submit" type="submit" id=""> Отправить </button>
                        </form>
                     </div>
                    </div>

                </div>
        
    )
}
export default Contact;