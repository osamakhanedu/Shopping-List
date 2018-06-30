import React, { Component } from 'react';

import NavigationBar from './components/navbar'; 
import ShoppingList from './components/shoppingList';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavigationBar />
          <ShoppingList />
      </div>
    );
  }
}

export default App;
