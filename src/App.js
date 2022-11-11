
import './App.css';
import green from './green-apple.png';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 import About from './Components/About';
 import Contact from './Components/Contact';
 import Delivery from './Components/Cart/Delivery'
import MainPage from './Components/MainPage';
import TotalProductsNum from './Components/Cart/TotalProductsNum';
import Cart from './Components/Cart/Cart'


function App() {

const [modalActive,setModalActive]= useState(false);

return <Router>
     <div className='up'><p className='up-white'>Скидки 10% на сезонные овощи и фрукты с промокодом : OK</p></div>
    
<nav> 
     
        <Link to="/" className='link' ><img src={ green }alt='green'/></Link>
        <Link to="/about" className='link' > О нас</Link>
        <Link to="/delivery" className='link' >Доставка</Link>
        <Link to="/contact" className='link'>Контакты</Link>
       
       <div className='cart-num'>
         <div className='total-prod-num'>
         <span className='' onClick={() => setModalActive(true)}><img className="cartIcon" src="https://img.icons8.com/color/2x/add-shopping-cart.png"alt="icon"/></span>
        </div>
        <div className='total-prod-num'>
       <TotalProductsNum/>
        </div>
        </div>
        <Cart active={modalActive} setActive={setModalActive}/>
        </nav>
       
        <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/delivery" element={ <Delivery/> } />
       </Routes>
      
    </Router>
      
  }
export default App;
