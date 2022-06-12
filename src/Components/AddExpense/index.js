import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense } from '../../Apis/Api';
import { GlobalContext } from '../../App';
import Tabs from '../Tabs';
import './style.css'


function AddExpense(props) {
    
    const [name, setName] = useState(localStorage.getItem('recentName') || "");
    const [price, setPrice] = useState(localStorage.getItem('recentPrice') || 0);
    const [date, setDate] = useState(localStorage.getItem('recentDate') || Date.now());
    const { state, dispatch } = useContext(GlobalContext)

    const navigate = useNavigate();
    
    async function submitHandler(e) {
        e.preventDefault();
        await addExpense({name,price,date})
        localStorage.setItem('recentName', name);
        localStorage.setItem('recentPrice', price);
        localStorage.setItem('recentDate', date);
        navigate('/list')
        dispatch({type:"updated"})
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
        <Tabs />
    </div>
    );
}

export default AddExpense;