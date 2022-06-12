import React, { useContext } from 'react';
import { deleteExpense } from '../../Apis/Api';
import { GlobalContext } from '../../App';

function Row(props) {
    let data = props.data;
    const { state, dispatch } = useContext(GlobalContext)

    async function onDeleteHandler(e, id){
        e.preventDefault();
        console.log(id);
        await deleteExpense(id)
        dispatch({type:"updated"})
    }
    return (
            <tr>
                <td data-th="Name">
                    {data.name}
                </td>
                <td data-th="Price">
                    {data.price}
                </td>
                <td data-th="Date">
                    {new Date(data.date).toLocaleString()}
                </td>
                <td data-th="Action">
                    <button onClick={(e)=>{onDeleteHandler(e, data._id)}}>x</button>
                </td>
            </tr>
    );
}

export default Row;