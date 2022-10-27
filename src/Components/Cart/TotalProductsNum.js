import { useSelector } from "react-redux";
import { getTotalProducts} from "../../redux/cartSlice";


const TotalProductsNum = () =>{
    const totalProducts = useSelector(getTotalProducts);
    return(<div>
 <p>{totalProducts}</p>
     </div>
    ) 
 
 }
 export default TotalProductsNum;