import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";
import Prod from "./Prod";
import dataProducts from "../../data/dataProducts";

const Products =() =>{
const selectedCategory=useSelector(getSelectedCategory);

return(
     <div className="goods">
 
          {dataProducts
          .filter(prod=>{
           if (selectedCategory === 'КАТАЛОГ')return true;
           return selectedCategory === prod.choice;
                  })
            .map(prod =><Prod prod={prod} key={prod.id}/>)}
      </div>
    )
}
export default Products;
