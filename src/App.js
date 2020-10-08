import React from 'react';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Store from './store/store';
import { Provider } from 'react-redux';
import Storepage from './pages/store'

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {



  return (
    <Provider store={Store}>

    <Router>
    <div className="App">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/store" component={Storepage} />
    </div>
    </Router>
    </Provider>

  );
}

export default App;
