import React from 'react';
import './App.css';
import Navigation from './components/navig';
import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Store from './store/store';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <Provider store={Store}>

    <Router>
    <Navigation/>
    <div className="App">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </div>
    </Router>
    </Provider>

  );
}

export default App;
