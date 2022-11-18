import dataProducts from "../../data/dataProducts"
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartSlice"
const CartItem = ({cartItem}) =>{

const products = dataProducts.find(item =>item.id === cartItem.dishId)
const dispatch=useDispatch();

return(
    <div>
       <img id="cart-photo"src={`${products.img}.jpeg`}alt="goods"/>
       <p>{products.name}</p>
       <p>{cartItem.quantity}порций</p>
       <p>Цена:{products.price * cartItem.quantity} </p>
       <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"alt="icon"/> 
      </span>
     </div>
       )
}
export default CartItem;