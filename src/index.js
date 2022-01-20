import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers go here
const orderList = (state = [], action) => {
    switch(action.type) {
        case 'SET_ORDER_LIST':
            return action.payload;
    };
    
    return state;
}

// Create the store
const store = createStore(
    combineReducers({
        orderList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
