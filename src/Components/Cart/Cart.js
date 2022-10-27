import { useSelector} from "react-redux";
import { getCartItems,getTotalProducts, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart =() =>{
    const CartItems = useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice);
    const totalProducts = useSelector(getTotalProducts);
    return(
        <div>
            

<img className="cartIcon" src="https://img.icons8.com/color/2x/add-shopping-cart.png"alt="icon"/>
<p>Количество товара:{totalProducts}</p>
<h3>СУММА: {totalPrice}</h3>
       {CartItems.map(cartItem=> <CartItem cartItem={cartItem}key={cartItem.id}/>)}
        </div>
    )
}
export default Cart;