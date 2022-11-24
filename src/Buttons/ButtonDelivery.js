
import { Link } from "react-router-dom";

      function ButtonDelivery(){
              return(
                   <div> 
                      <Link to="/delivery">
                        <button className='button-two-page' >
                           Оформить доставку
                        </button>
                      </Link>
                  </div> 
                    )
}
export default ButtonDelivery;