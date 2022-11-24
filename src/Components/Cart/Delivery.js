
import { useSelector} from "react-redux";
import React from "react";
import {getTotalProducts, getTotalPrice } from "../../redux/cartSlice";
import { gsap } from "gsap";
const { useEffect, useRef } = React;

function Delivery(){
   
    const totalPrice=useSelector(getTotalPrice);
    const totalProducts = useSelector(getTotalProducts);

    const anim = useRef();
    useEffect(() => {
    let animation = gsap.context(() => {
        gsap.from(".cartAnim", { x:-500, duration:2, stagger:.7 , opacity:0});
    }, anim);
    return () => animation.revert();
    });
   
    
return( 
    <div ref={anim}>
       <div className="text-delivery">
        <img className="cartAnim"src="https://img.freepik.com/free-vector/shopping-bag-basket-composition-with-isolated-image-of-products-in-supermarket-trolley-cart_1284-54441.jpg?w=1480&t=st=1669136342~exp=1669136942~hmac=1e76309bfdf9851517f1d9dcf8207240d954e46feb1c01403729ebb2b4703848"width="200px" height="auto" alt="delivery"/>
           <h3>Количество товара:{totalProducts} шт.</h3>
              <h3>Итоговая сумма:  {totalPrice-totalPrice*(0.1)} рублей</h3>
          
          <form action="https://formspree.io/f/mpzbnday"  method="POST">
              <input placeholder="Ваше имя ..." type="text"  name="username" required />
              <input type="text" placeholder="Адрес доставки..." required/>
              <input  placeholder="Введите ваш E-mail" type="email" name="email" required/>
              <textarea id='name-contact' placeholder="Напишите сообщение..." type="text" name="message"></textarea>
              <button className='btn-footer' name="submit" type="submit"> Отправить</button>
          </form>
       </div>
     </div>        
       )
}
export default Delivery;