import Social from "./Social";

function Footer(){
    return(
        <div className="body-footer">
          <div className="page-contact">  
            
             <Social/>
                 <form action="https://formspree.io/f/mpzbnday"  method="POST">
                    <p className="par-contact">Подписаться на рассылку</p>
                    <input id='name-contact' placeholder="Ваше имя..." type="text"  required />
                    <input id='name-contact' placeholder="Введите ваш Email..." type="email"  name="email"  required/>
                    <button className='but-contact-footer' name="submit" type="submit" id=""> Отправить </button>
                 </form>
                     <div className="foot">
                         <p className="name-foot"> Designed and Developed by Olga Travina</p>
                         <p className="name-foot">2022</p>
                     </div>
            </div>
            
        </div>
    )
}
export default Footer;