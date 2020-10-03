import {createStore} from 'redux';

// Reducer

function cart_items(state=1, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'NEUTRALIZE':
       return state = 0
    default:
      return state
  }
}

let Store = createStore(cart_items)




// store.subscribe(()=>console.log(store.getState()))

// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({type:'NEUTRALIZE'})



export default Store;
