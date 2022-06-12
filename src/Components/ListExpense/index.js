import React, { useEffect, useState } from 'react';
import { listMyExpense } from '../../Apis/Api';
import Row from './Row'
import './style.css'


function ListExpense(props) {
    let [data, setData] = useState([]);
    useEffect(() => {
        let res = listMyExpense().then(setData)
    }, []);

    return (
        <div>
            <div className="container">
                <h1>Responsive Table</h1>
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        {data?.length && data.map((el) => <Row data={el} key={el._id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ListExpense;