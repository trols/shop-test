
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartSlice"
const CartItem = ({cartItem}) =>{


const dispatch=useDispatch();

return(
     <div>
         <div className="in-cart">
             <img id="cart-photo"src={`${cartItem.img}.jpeg`}alt="goods"/>
                 <div>
                    <p>{cartItem.name}</p>
                    <p>{cartItem.quantity}{cartItem.form}</p>
                 </div>
                    <div>
                       <p>Цена:  {cartItem.price * cartItem.quantity} руб.</p>
                    </div>
      
                    <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
                        <img className="icon" 
                           src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"alt="icon"
                        /> 
                     </span>
     
          </div> 
                     <hr/>
     </div>
       )
}
export default CartItem;