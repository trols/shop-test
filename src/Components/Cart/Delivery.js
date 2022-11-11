
import { useSelector} from "react-redux";
import React from "react";
import {getTotalProducts, getTotalPrice } from "../../redux/cartSlice";
import { useState } from "react";


function Delivery(){
   
    const totalPrice=useSelector(getTotalPrice);
    const totalProducts = useSelector(getTotalProducts);

    const [value, setValue] = useState();
    const [sale,setSale]=useState(0)
    
function changeValue(e) {
         setValue(e.target.value.toUpperCase()); 
    }

    const Promocode=()=>{
        if (value==='OK'){
            setSale(10)
        }
        else{alert(' промокод не подходит')}
    }

    const Delivery = ()=>{

    }
    const Deliveryplus = ()=>{

    }

return( 
        <div className="frame-delivery">


<div className="text-delivery">
<p>Количество товара:{totalProducts} шт.</p>
<h3>Ваш заказ на сумму: {totalPrice} рублей</h3>
<input className="" placeholder="Введите промо-код..." value={value} onChange={changeValue} />
<button className="" onClick={Promocode}>Добавить</button>
<h3>Сумма со скидкой:  {totalPrice-totalPrice*(sale/100)} рублей</h3>


<div id="all-delivery-box">

            <div>
             <button onClick={Deliveryplus}className="delivery-box">Доставка</button>
            </div>

            <div >
            <button onClick={Delivery} className="delivery-box">Самовывоз</button>
            </div>
</div>
<h3>Сумма с доставкой:  {totalPrice-(totalPrice*sale/100)+200} рублей</h3>


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