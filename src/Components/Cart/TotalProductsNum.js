import { useSelector } from "react-redux";
import { getTotalProducts} from "../../redux/cartSlice";


const TotalProductsNum = () =>{
    const totalProducts = useSelector(getTotalProducts);
        return(
             <div>
                  <p className="p-cart">{totalProducts}</p>
             </div>
              ) 
 }
 export default TotalProductsNum;