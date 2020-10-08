import React from 'react';
import Contact_us from '../components/contact_us';
import Ordered_items from '../components/ordered_items';
import Navigation from '../components/navig';


function Cart(){
  var total_items = 0;
  var total_price = 0;
  Ordered_items.map((items, key)=>(
    total_items+=items.quantity
  ))
  Ordered_items.map((items, key)=>(
    total_price+=(items.price*items.quantity)
  ))
  console.log(total_items)
  console.log(total_price)




  return(
    <>
    <Navigation gotostorebutton=<button className="gotostore">Go to Store</button>/>

    <div className="cart">
        <div className="box-element">
          <a className="continueshopping" href="/store">&#x2190; <button>Continue Shopping</button></a><hr/>
          <br></br>
            <ul>
              <li><h5>Items: <strong>{total_items}</strong></h5></li>
              <li><h5>Total: <strong>${total_price}</strong></h5></li>

                  <a className="checkout" href="/checkout"><button>Checkout</button></a>

            </ul>


        </div><hr/>

        <div className="box-element-2">
        <div className="cart-row">
          <div style={{flex:'2'}}></div>
          <div style={{flex:'2'}}><strong>Item</strong></div>
          <div style={{flex:'1'}}><strong>Price</strong></div>
          <div style={{flex:'1'}}><strong>Quantity</strong></div>
          <div style={{flex:'1'}}><strong>Total</strong></div>
        </div>

        {Ordered_items.map((ordered_items, key)=>(


        <div className="cart-row" key={key}>
					<div style={{flex:'2'}}><img src={ordered_items.image}></img></div>
					<div style={{flex:'2'}}><p>{ordered_items.name}</p></div>
					<div style={{flex:'1'}}><p>{ordered_items.price}</p></div>
					<div style={{flex:'1'}}>
						<p className="quantity">{ordered_items.quantity}</p>
						<div className="toggle-quantity">
						</div>
					</div>
					<div style={{flex:'1'}}><p>{ordered_items.price*ordered_items.quantity}</p></div>
				  </div>
        ))}


      </div>
    </div>
    <Contact_us/>

    </>

  )
}


export default Cart;
