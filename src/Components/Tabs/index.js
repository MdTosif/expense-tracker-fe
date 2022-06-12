import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Tabs(props) {
    const navigate = useNavigate()
    return (
        <div className='tabs'>
            <button className='btn fourth' onClick={()=>{navigate('/add')}}>Add</button>
            <button className='btn fourth' onClick={()=>{navigate('/list')}}>Lists</button>
            <button className='btn fourth' onClick={()=>{navigate('/chart')}}>Charts</button>
        </div>
    );
}

export default Tabs;