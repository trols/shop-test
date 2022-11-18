import React from "react";
import AllCategories from "./Components/Filter/AllCategories";
import Products from "./Components/ProductsComponents/Products";

function Images(){

   return(
        <div className="App">
             <div id="PageTwo">
               <p className="headPageTwo" >Наши продукты</p>
      
                 <AllCategories/> 
                 <Products/>
              </div>
      </div>

    )
}
export default Images;