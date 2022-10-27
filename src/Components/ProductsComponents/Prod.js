import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Prod =({prod}) =>{
    const[quantity,setQuantity]=useState(1);
    const dispatch=useDispatch()
    return(
        
  <div>

        <div className="block">
<h2>{prod.name}</h2>
<p>{prod.price} рублей</p>
<img id="photo"src={`${prod.img}.jpeg`}alt="goods"/>
<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<button onClick={()=>{dispatch(addItemToCart({prod,quantity}))}}>Добавить</button>
</div>

</div>


    )
}
export default Prod;