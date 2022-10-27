
import { useDispatch} from "react-redux";
import { filterCategory } from "../../redux/productsSlice";




const Filter =({category}) =>{
    const dispatch = useDispatch();
    
    return(
        <div>
            
<h5 onClick={()=>{dispatch(filterCategory(category))}}>{category}</h5>
        </div>
    )
}
export default Filter;