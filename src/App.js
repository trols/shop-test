
import './App.css';
import green from './green-apple.png';
import Cart from './Components/Cart/Cart';
import TotalProductsNum from './Components/Cart/TotalProductsNum';
import AllCategories from './Components/Filter/AllCategories';
import Products from './Components/ProductsComponents/Products';
import image from './pict1.jpeg';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 import About from './Components/About';
 import Contact from './Components/Contact';
 import Delivery from './Components/Delivery';


function App() {

  
  return <Router>
     <nav> 
        <Link to="/" className='link' ><img src={ green }alt='green' /></Link>
        <Link to="/about" className='link' > О нас</Link>
        <Link to="/delivery" className='link' >Доставка</Link>
        <Link to="/contact" className='link'>Контакты</Link>
        <div id="shadow-fon">
      <div id="window" >
        <Cart/>
        <a href="#"className="close">Закрыть</a>
        
      </div>
     </div>


    <div className="cart-num">
    <a href="#shadow-fon"><img src="https://img.icons8.com/color/2x/add-shopping-cart.png"alt="icon" width="40px"height="40px"/></a>
      <h4 className='total-prod-num'><TotalProductsNum/></h4>
      
</div>

        </nav>
        <Routes>
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/delivery" element={ <Delivery/> } />
      </Routes>
    <div className="App">


    <AllCategories/> 
    
<img src={image} alt="main"/>

<Products/>
<div className="page-contact">
             <div className='social-share'>
<div className="top-icon">

<a href="https://www.vk.com/share.php?url=" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/office/344/vk-circled.png" width="25px" height="25px" alt="icons"/>
</a>
<a href="https://api.whatsapp.com/" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/color/2x/whatsapp.png" width="25px" height="25px" alt="icons"/>
</a>
<a href="https://t.me/share" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/color/2x/telegram-app.png" width="25px" height="25px" alt="icons"/>
</a>


  </div> </div> </div>
 </div>
 </Router>
  ;
}

export default App;
