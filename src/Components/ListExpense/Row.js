import React from 'react';

function Row(props) {
    let data = props.data;
    async function onDeleteHandler(e){
        e.preventDefault();
        
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
                    <button onClick={(e)=>{onDeleteHandler(e)}}>x</button>
                </td>
            </tr>
    );
}

export default Row;