import { Link } from "react-router-dom";


function BurgerMenu(){
   
      const BurgerMenu = () =>{
        let links = document.querySelector("#nav-two");
          if (links.style.display === "block") {
              links.style.display = "none";
          }
          else {
              links.style.display = "block";
          }
      }

        return(
              <div> 
                  <div className="button-burger">
                     <button className="burger" onClick={BurgerMenu}>
                         <span></span>
                    </button>
                   </div>

                   <div id ="nav-two">
                       <div className='link-two'> 
                          <Link to="/" className='links' onClick={BurgerMenu}> Главная </Link>
                          <Link to="/about" className='links' onClick={BurgerMenu}> О нас</Link>
                          <Link to="/contact" className='links' onClick={BurgerMenu}> Контакты </Link>
                        </div>
                    </div>

             </div>
)
}
export default BurgerMenu;