import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList'
import { HashRouter as Router, Route, Link} from 'react-router-dom';

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
    </div>


    </Router>
  );
}

export default App;
