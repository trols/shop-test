
import { useSelector} from "react-redux";
import ButtonDelivery from "../../Buttons/ButtonDelivery";
import { getCartItems,getTotalProducts, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart =({active,setActive}) =>{

   const CartItems = useSelector(getCartItems);
   const totalPrice=useSelector(getTotalPrice);
   const totalProducts = useSelector(getTotalProducts);
    
return(
     <div>
       <div className={active ? " modal active" : " modal " }>
         <div id="window"className="modal-content" onClick={e => e.stopPropagation}>
            <img className="cartIcon" src="https://img.icons8.com/color/2x/add-shopping-cart.png"alt="icon"/>
            <p> Количество товара:{totalProducts}</p>
            <h3> СУММА: {totalPrice}</h3>

            <ButtonDelivery/>

            <button id="close"className="modal-content"onClick={() => setActive(false)}>
                  Продолжить покупки
            </button>
              
           <div className={active ? 'scrollLine close': 'scrollLine open'}> 
              {CartItems
              .map(cartItem=> <CartItem cartItem={cartItem}key={cartItem.id}/>
                  )
              }
           </div>
         </div>
      </div>
   </div>
)
}
export default Cart;