
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

return( 
    <div>
       <div className="text-delivery">
           <p>Количество товара:{totalProducts} шт.</p>
           <h3>Ваш заказ на сумму: {totalPrice} рублей</h3>
           <input className="" placeholder="Введите промо-код..." value={value} onChange={changeValue} />
           <button className="add-button-delivery" onClick={Promocode}>
            Добавить
           </button>
           <h3>Итоговая сумма:  {totalPrice-totalPrice*(sale/100)} рублей</h3>

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