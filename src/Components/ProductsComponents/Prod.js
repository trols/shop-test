import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Prod =({prod}) =>{
const[quantity,setQuantity]=useState(1);
const dispatch=useDispatch()

return(
        <div className="wrapper-blocks">
            
<div className="block">
<h2>{prod.name}</h2>
<img id="photo"src={`${prod.img}.jpeg`}alt="goods"/>
<p>{prod.price} рублей</p>

<ChangeQuantity 
quantity={quantity} 
setQuantity={setQuantity}
/>
<button className="button-add"onClick={()=>{dispatch(addItemToCart({prod,quantity}))}}>Добавить</button>
</div>

</div>

)
};
export default Prod;