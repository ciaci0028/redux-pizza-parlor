import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function PizzaOrder(){
        const dispatch = useDispatch();
        const history = useHistory();

        const orderList = (store => store.orderList);

        const [name, setName] = useState('');
        const [address2, setAddress2] = useState('');
        const [city, setCity] = useState('');
        const [zip, setZip] = useState('');
        const [type, setType] = useState('');
        // const [total, setTotal] = useState('');

        // const [orderInfo, setOrderInfo] = useState({name:'', address2: '', city: '', zip: '', type: '', pizzas: ''});

        const onAddOrder = (evt) => {
        evt.preventDefault();
        console.log('in onAddOrder');
        const orderInfo = {
                customer_name: name,
                street_address: address2,
                city: city,
                zip: zip,
                type: type,
                // total: total,
        }
        
        console.log('order info is', orderInfo)
        axios.post('/api/order', orderInfo)
                .then ( res => {
                        console.log('POST /pizza/order', res);
                        // function with axios.get
                        dispatch({
                                type: 'UPDATE_ORDER_LIST',
                                payload: orderInfo
                        })      
                })
                .catch ( err => {
                        console.error('POST /pizza/order', err)
                })

        
        setName('');
        setAddress2('');
        setCity('');
        setZip('');
        setType('');
        setTotal('')
        };


        const saveCustomerInformation = (event) => {
                event.preventDefault();
                console.log('in save customer info');

                const orderInfo = {
                        customer_name: name,
                        street_address: address2,
                        city: city,
                        zip: zip,
                        type: type,
                        // total: total,
                }
                console.log('orderinfo', orderInfo)

        // need to use history.push to move on to next screen
                
        }

return(
        <form onSubmit={saveCustomerInformation}>
                <input 
                        type="text"
                        value={name}
                        onChange = {evt => setName(evt.target.value)}
                        placeholder="Name"
                /><br/>
                <input 
                        type="text"
                        value={address2}
                        onChange = {evt => setAddress2(evt.target.value)}
                        placeholder="Street Address"
                /><br/>
                <input 
                        type="text"
                        value={city}
                        onChange = {evt => setCity(evt.target.value)}
                        placeholder="City"
                /><br/>
                <input 
                        type="number"
                        value={zip}
                        onChange = {evt => setZip(evt.target.value)}
                        placeholder="Zip"
                /><br/>
                <label>Pickup or Delivery?</label><br/>
                <select id="input" name="input" onChange={event => setType(event.target.value)}>
                        <option value="Pickup">Pickup</option>
                        <option value="Delivery">Delivery</option>
                </select><br/>
                <button type="submit">Next</button>
        </form>
)
}

export default PizzaOrder
