import React, { useState } from 'react';
import { addExpense } from '../../Apis/Api';
import './style.css'


function AddExpense(props) {
    
    const [name, setName] = useState(localStorage.getItem('recentName') || "");
    const [price, setPrice] = useState(localStorage.getItem('recentPrice') || 0);
    const [date, setDate] = useState(localStorage.getItem('recentDate') || Date.now());
    
    async function submitHandler(e) {
        e.preventDefault();
        let data = await addExpense({name,price,date})
        localStorage.setItem('recentName', name);
        localStorage.setItem('recentPrice', price);
        localStorage.setItem('recentDate', date);

        console.log(data);
    }


    return (
        <div>
        <form action="" onSubmit={(e) => { submitHandler(e) }} className="login-form">
            <h1>Add expense</h1>
            <div className="form-input-material">
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="username" id="username"  autoComplete="off" required className="form-control-material" />
                <label htmlFor="username">Name</label>
            </div>
            <div className="form-input-material">
                <input type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="username" id="username"  autoComplete="off" required className="form-control-material" />
                <label htmlFor="username">Price</label>
            </div>
            <div className="form-input-material">
                <input type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    name="username" id="username" autoComplete="off" required className="form-control-material" />
                <label htmlFor="username">Name</label>
            </div>
            <button type="submit" className="btn btn-ghost">Add</button>
        </form>
    </div>
    );
}

export default AddExpense;