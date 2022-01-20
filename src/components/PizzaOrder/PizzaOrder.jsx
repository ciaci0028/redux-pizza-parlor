import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios'


function PizzaOrder(){
        const dispatch = useDispatch();

        const orderList = (store => store.orderList);

        const [name, setName] = useState('');
        const [address2, setAddress2] = useState('');
        const [city, setCity] = useState('');
        const [zip, setZip] = useState('');
        const [type, setType] = useState('');
        const [total, setTotal] = useState('');

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
                total: total,
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
        }

    return(
      <form onSubmit={onAddOrder}>
        <input 
                type="text"
                value={name}
                onChange = {evt => setName(evt.target.value)}
                placeholder="Name"
        />
        <input 
                type="text"
                value={address2}
                onChange = {evt => setAddress2(evt.target.value)}
                placeholder="Address"
        />
        <input 
                type="text"
                value={city}
                onChange = {evt => setCity(evt.target.value)}
                placeholder="city"
        />
        <input 
                type="number"
                value={zip}
                onChange = {evt => setZip(evt.target.value)}
                placeholder="Zip"
        />
        <input 
                type="text"
                value={type}
                onChange = {evt => setType(evt.target.value)}
                placeholder="Type"
        />
        <input 
                type="text"
                value={total}
                onChange = {evt => setTotal(evt.target.value)}
                placeholder="Total"
        />
        <button type="submit">Add Order</button>
      </form>
    )
}

export default PizzaOrder
