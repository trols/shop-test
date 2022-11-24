
import { useSelector} from "react-redux";
import ButtonDelivery from "../../Buttons/ButtonDelivery";
import { getCartItems,getTotalProducts, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart =({active,setActive}) =>{

   const CartItems = useSelector(getCartItems);
   const totalPrice=useSelector(getTotalPrice);
   const totalProducts = useSelector(getTotalProducts);
   const [value, setValue] = useState();
   const [promo,setPromo]=useState(0)


   
   function changeValue(e) {
      setValue(e.target.value.toUpperCase()); 
 }
   const Promocode=()=>{
      if (value==='OK'){
          setPromo(10)
      }
      else{alert(' промокод не подходит')}
  }
 
return(
     <div>
         <div className={active ? " modal active" : " modal " }>
             <div id="window"className="modal-content" onClick={e => e.stopPropagation}>
                <img className="cartIcon" src="https://img.icons8.com/color/2x/add-shopping-cart.png"alt="icon"/>
                <h3> Количество товара :  <span className="weight">{totalProducts}</span></h3>
                <h3> СУММА :  <span className="weight">{totalPrice} рублей</span></h3>
                <input className="" placeholder="Введите промо-код..." value={value} onChange={changeValue} />
                <button className="add-button-delivery" onClick={Promocode}>
                    Применить
                </button>
                <h3>ИТОГ :   <span className="weight-two">{totalPrice-totalPrice*(promo/100)} рублей</span></h3>

                 <div className="cart-fon">
                    <div className={active ? 'scrollLine close': 'scrollLine open'}> 
                       {CartItems
                       .map(cartItem=> <CartItem cartItem={cartItem} key={cartItem.id}/>
                          )
                        } 
                        </div></div>

                     <div className="button-in-cart">
                           <div onClick={() => setActive(false)}>
                            <ButtonDelivery/>
                           </div>
                              <button id="close" className="modal-content"onClick={() => setActive(false)}>
                                   Продолжить покупки
                              </button>
                     </div>
                  </div>
           </div>
       </div> 
)
}
export default Cart;