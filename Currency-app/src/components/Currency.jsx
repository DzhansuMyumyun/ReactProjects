import React, { useState } from 'react'
import { HiArrowRightCircle } from "react-icons/hi2";
import axios from 'axios'

let BASE_URL = "https...";
let API_KEY = "hhhhhiojknk";




function Currency() {

    const[amount, setAmount] = useState(1);
    const[fromCurrency, setFromCurrency] = useState("");
    const[toCurrency, setToCurrency] = useState("");
    const[result, setResult] = useState(0);


    const exchange = async() =>{
       const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currenc=${fromCurrency}`)
       const result = ((response.data.data[toCurrency])*amount).toFixed(2)
       setResult(result)
    }






  return (
    <div className='currency-container'>
        
        <div className='currency-sub-container'>
            <h1>Currency App</h1>
            <div>
                <input 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number" className='amount'/>
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option' >
                    <option value="usd">USD</option>
                    <option value="euro">EUR</option>
                    <option value="tl">TL</option>
                </select>
                <HiArrowRightCircle style={{fontSize: "15px"}}/>
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option' >
                    <option value="tl">TL</option>
                    <option value="euro">EUR</option>
                    <option value="usd">USD</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>
            <div className='exchange-button-div'>
                <button
                onClick={exchange}
                className='exchange-button'>Exchange</button>
            </div>

        </div>

    </div>
  )
}

export default Currency