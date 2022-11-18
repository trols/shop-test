
import Images from "./Images";
import React from "react";

function MainPage(){
   
return(
        <div className="App">

            <h2>ИНТЕРНЕТ-МАГАЗИН ПРОДУКТОВ</h2>
            <h2>ДОСТАВКА 24/7</h2>
            
            <div className="photo-text-button">
               <img className="main-photo" src="https://img.freepik.com/premium-photo/collection-vegetables-isolated-white-background_44074-1573.jpg?size=626&ext=jpg&ga=GA1.2.1287222821.1659992797&semt=sph" width="auto" height="500px"alt="about"/>
             </div>
 
              <a className="btnPageTwo" href="#PageTwo">Начать покупки</a>
 
                 <Images/>
         </div>
       )
    }
 export default MainPage;