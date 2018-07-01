import React, { Component } from 'react';

import NavigationBar from './components/navbar'; 
import ShoppingList from './components/shoppingList';

import {Provider} from 'react-redux'; 
import store from './redux/store'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
     <Provider store={store} > 
      <div className="App">
          <NavigationBar />
          <ShoppingList />
      </div>
      </Provider> 
    );
  }
}

export default App;
