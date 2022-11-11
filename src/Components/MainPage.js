import AllCategories from "./Filter/AllCategories";
import Products from "./ProductsComponents/Products";
import Images from "./Images";
import React from "react";



function MainPage(){
   
return(
        <div className="App">
         <div className="categories-button">
         <AllCategories/> 
         </div>
        <h1>ИНТЕРНЕТ-МАГАЗИН ПРОДУКТОВ</h1>
        <Images/>
        <Products/>
        </div>
       )
    }
 export default MainPage;