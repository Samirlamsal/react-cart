import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import About_us from './about_us';
import Arrival from './new_arrivals';
import { useSelector } from 'react-redux';
import store from '../store/store';

// store.subscribe(()=>console.log(store.getState()))
//<li><Link to="/"><img className="search" src="./service_images/search.png"></img></Link></li>

function Navigation(props){
  // const counter = store.subscribe(()=>store.getState())
  // var counter = store.getState()

  var counter = useSelector(state => state.cart_item)



  return(
    <div className="navigation">
      <ul className="logo">
        <li><h2><Link to="/">Company Logo</Link></h2></li>
      </ul>
      <ul className="links">
        <li className="gotostorebutton"><Link to="/store">{props.gotostorebutton}</Link></li>

        <li><a href="#about">{props.about}</a></li>
        <li><Link onClick={()=>scroll.scrollToBottom()}>Contact Us</Link></li>
        <li><Link to="cart"><img className="search" src="./service_images/cart.png"></img> {counter}</Link></li>
      </ul>
    </div>
  )
};


export default Navigation;
