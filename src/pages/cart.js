import React from 'react';
import Contact_us from '../components/contact_us';
function Cart(){
  return(
    <>
    <div className="cart">
        <div class="box-element">
          <a class="continueshopping" href="#">&#x2190; <button>Continue Shopping</button></a>
          <br></br>
          <table class="table">
            <tr>
              <th><h5>Items: <strong>5</strong></h5></th><br></br>
              <th><h5>Total: <strong>$500</strong></h5></th>
              <th>
                  <a class="btn btn-success" href="#"><button>Checkout</button></a>
              </th>
            </tr>
        </table>


        </div>

        <div class="box-element">
        <div class="cart-row">
          <div style={{flex:'2'}}></div>
          <div style={{flex:'2'}}><strong>Item</strong></div>
          <div style={{flex:'1'}}><strong>Price</strong></div>
          <div style={{flex:'1'}}><strong>Quantity</strong></div>
          <div style={{flex:'1'}}><strong>Total</strong></div>
        </div>


        <div class="cart-row">
					<div style={{flex:'2'}}><img src="#"></img></div>
					<div style={{flex:'2'}}><p>T-shirt</p></div>
					<div style={{flex:'1'}}><p>$400</p></div>
					<div style={{flex:'1'}}>
						<p class="quantity">4</p>
						<div class="toggle-quantity">

						</div>
					</div>
					<div style={{flex:'1'}}><p>$1000</p></div>
				</div>


      </div>
    </div>

    </>

  )
}


export default Cart;
