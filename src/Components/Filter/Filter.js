
import { useDispatch} from "react-redux";
import { filterCategory } from "../../redux/productsSlice";

const Filter =() =>{

const dispatch = useDispatch();
     
    return(
           <div className="categories">
                <div className="all pr"onClick={()=>{dispatch(filterCategory("КАТАЛОГ"))}}>КАТАЛОГ</div>
                <div className="fruits pr"onClick={()=>{dispatch(filterCategory("ФРУКТЫ"))}}>ФРУКТЫ</div>
                <div className="vegetables pr"onClick={()=>{dispatch(filterCategory("ОВОЩИ"))}}>ОВОЩИ</div>
                <div className="meat pr"onClick={()=>{dispatch(filterCategory("МЯСО"))}}>МЯСО</div>
                <div className="fish pr"onClick={()=>{dispatch(filterCategory("РЫБА"))}}>РЫБА</div>
                <div className="bread pr"onClick={()=>{dispatch(filterCategory("ХЛЕБ"))}}>ХЛЕБ</div>
                <div className="alcohol pr"onClick={()=>{dispatch(filterCategory("АЛКОГОЛЬ"))}}>АЛКОГОЛЬ</div>
           </div>
           )
}
export default Filter;