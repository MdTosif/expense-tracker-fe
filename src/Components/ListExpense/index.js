import React, { useContext, useEffect, useState } from 'react';
import { listMyExpense } from '../../Apis/Api';
import { GlobalContext } from '../../App';
import Loading from '../Loading';
import Tabs from '../Tabs';
import Row from './Row'
import './style.css'



function ListExpense(props) {
    const { state, dispatch } = useContext(GlobalContext)
    let [data, setData] = useState([]);
    useEffect(() => {
        listMyExpense().then(setData)
    }, [state]);

    return (
        <div>
            < div className="container" >
                <h1>Responsive Table</h1>
                {data.length ? <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        {data?.length && data.map((el) => <Row data={el} key={el._id} />)}
                    </tbody>
                </table> : <Loading />}
                <Tabs/>
            </div >
        </div >
    )

}

export default ListExpense;