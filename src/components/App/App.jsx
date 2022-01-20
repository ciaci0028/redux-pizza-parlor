import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaOrder from '../PizzaOrder/PizzaOrder'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <PizzaOrder />
    </div>
  );
}

export default App;
