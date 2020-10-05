import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Book_data from '../components/products';
import Store from '../store/store'
import Navigation from '../components/navig';
import Contact_us from '../components/contact_us';


const Storepage=()=>{
  const dispatch=()=>{
  Store.dispatch({type:'INCREMENT'})
  console.log(Store.getState())
  }
  return(
    <>
    <Navigation about=''/>

        <div className="arrivals">
          <div className="arrival-container">
          {
            Book_data.map((book, key)=>
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
        </div>
        <Contact_us/>
    </>
  )
}


export default Storepage;
