import React from 'react';
import Book_data from './products';
import Store from '../store/store'
import {useDispatch} from 'react-redux';


function Arrival(){
  const dispatch=()=>{
  Store.dispatch({type:'INCREMENT'})
  console.log(dispatch.type)
  }
  return(
    <>
    <div className="arrivals">
      <h1>New Arrivals</h1>
      <div className="arrival-container">
      {
        Book_data.slice(0, 4).map((book, key)=>
      (
        <div key={key} className="arrival-card">
            <img className="book-image" src={book.image}></img><br/>
            <div className="titleandprice">
              <h2>{book.title} </h2>
              <h2>$ {book.price}</h2>
            </div>
            <div className="buttons">
              <button onClick={dispatch}>Add to Cart</button>
              <button>View</button>
            </div>
        </div>

      ))
      }
      </div>
      <div className="gotocart">
      <button>Go to Store</button>
      </div>
    </div>
    </>
  )
}

export default Arrival;
