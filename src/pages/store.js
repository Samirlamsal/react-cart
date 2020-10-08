import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Book_data from '../components/products';
import Store from '../store/store'
import Navigation from '../components/navig';
import Contact_us from '../components/contact_us';


const Storepage=()=>{
  const dispatch=()=>{
  Store.dispatch({type:'INCREMENT'})
  console.log(Store.getState())
  }
  const [state, setState] = useState('logo')
  const changeState=()=>{
    setState('search')
  }

  const [input, setInput] = useState('')

  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value);
  }
  let book_data = Book_data;

  if(input.length>0){
    book_data = Book_data.filter((i)=>{
      return i.title.match(input);
      console.log(book_data)

    })
  }

  return(
    <>
    <Navigation about='' gotostorebutton=
    {(state==='logo')?
    <li><img className="search" onClick={changeState} src="./service_images/search.png"></img></li>:
    <input type="text" onChange={handleChange} value={input} placeholder="Search"/>
    }
    />

        <div className="arrivals">
          <div className="arrival-container">
          {
            book_data.map((book, key)=>
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
