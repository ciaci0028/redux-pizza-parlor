import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios'


function PizzaOrder(){
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('')
    const [pizzas, setPizzas] = useState('')

    const [orderInfo, setOrderInfo] = useState({name:'', address2: '', city: '', zip: '', type: '', pizzas: ''});

    const onAddOrder = (evt) => {
        evt.preventDefault();
        console.log('in onAddOrder');
        setOrderInfo({
            ...orderInfo,
            name: name,
            address2: address2,
            city: city,
            zip: zip,
            type: type,
            pizzas: pizzas
        })
           
            axios.post('/api/order', orderInfo)
                    .then ( res => {
                        console.log('POST /pizza/order', res);
                        // function with axios.get
                    })
                    .catch ( err => {
                        console.error('POST /pizza/order', err)
                    })

            setName('');
            setAddress2('');
            setCity('');
            setZip('');
            setType('');
            setPizzas('')
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
                value={pizzas}
                onChange = {evt => setPizzas(evt.target.value)}
                placeholder="Pizzas"
        />
        <button type="submit">Add Order</button>


      </form>
    )
}

export default PizzaOrder
