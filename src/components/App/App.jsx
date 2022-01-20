import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList'
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import OrderList from '../OrderList/OrderList';


function App() {

  return (
    <Router>


    <div className='App'>

    <nav>
      <Link to="/">Home</Link>
    </nav>





      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  

      <Route path="/" exact>
      <PizzaList />
      </Route>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <OrderList />
  

    </div>


    </Router>
  );
}

export default App;
