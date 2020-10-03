import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import About_us from './about_us';
import Arrival from './new_arrivals';
import { useSelector } from 'react-redux';
import store from '../store/store';


function Navigation(){
  // const cart_item = useSelector(state => state.cart_items)
  // console.log(cart_item)
  const cart_items = store.getState()



  return(
    <div className="navigation">
      <ul className="logo">
        <li><h2><Link to="/">Company Logo</Link></h2></li>
      </ul>
      <ul className="links">
        <li><Link to="/"><img className="search" src="./service_images/search.png"></img></Link></li>
        <li><a href="#about">About Us</a></li>
        <li><Link onClick={()=>scroll.scrollToBottom()}>Contact Us</Link></li>
        <li><Link to="cart"><img className="search" src="./service_images/cart.png"></img> {cart_items}</Link></li>
      </ul>
    </div>
  )
};


export default Navigation;
