import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getCartItems, updateQuantity} from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Prod ({prod}){
const[quantity,setQuantity]=useState(1);
const dispatch=useDispatch()

const cartItems = useSelector(getCartItems)
console.log(cartItems);
const prodInCart = cartItems.some(item=>item.id === prod.id)
console.log(prodInCart);

const hadleToCart = () => {
        if(!prodInCart) {
                dispatch(addItemToCart({prod, quantity}))
        } else{
                dispatch(updateQuantity({prod, quantity}))
        }
}
return(
     <div className="wrapper-blocks">
        <div className="block">
            <h2 className="smallHead">{prod.name}</h2>
            <img id="photo"src={`${prod.img}.jpeg`}alt="goods"/>
            <p>{prod.price} рублей</p>

               <ChangeQuantity 
                 quantity={quantity} 
                 setQuantity={setQuantity}
                 />
                    <button className="button-add"
                        onClick={hadleToCart}>
                        Добавить
                     </button>
        </div>
      </div>
      )
};
export default Prod;