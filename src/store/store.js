import {createStore} from 'redux';

// Reducer

const initialCount={
  cart_item : 0
}


function cart_items(state, action){
  switch(action.type){
    case 'INCREMENT':
      return {cart_item:state.cart_item + 1}
    case 'DECREMENT':
      return {cart_item:state.cart_item + 1}
    case 'NEUTRALIZE':
       return {cart_item:0}
    default:
      return state
  }
}

let Store = createStore(cart_items, initialCount)




// store.subscribe(()=>console.log(store.getState()))

// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'NEUTRALIZE'})



export default Store;
