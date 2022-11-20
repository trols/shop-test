
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartSlice"
const CartItem = ({cartItem}) =>{


const dispatch=useDispatch();

return(
    <div>
       <img id="cart-photo"src={`${cartItem.img}.jpeg`}alt="goods"/>
       <p>{cartItem.name}</p>
       <p>{cartItem.quantity}порций</p>
       <p>Цена:{cartItem.price * cartItem.quantity} </p>
       <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"alt="icon"/> 
      </span>
     </div>
       )
}
export default CartItem;