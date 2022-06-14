import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { barChartData } from '../../Apis/Api';
import Loading from '../Loading';

function BarChart(props) {
    // const data = [
    //     ["Name", "Price"],
    // ];

    const options = {
        title: "Name And Price Of Expenses",
        chartArea: { width: "50%" },
        hAxis: {
            title: "Total Price",
            minValue: 0,
        },
        vAxis: {
            title: "Name",
        },
    };

    const [data, setData] = useState([])

    useEffect(() => {
        barChartData().then((el) => {
            el = el.map((e)=>{
                return [e._id, e.price]
            })
            setData([["Name", "Price"], ...el])
        })
    }, [])

    return (
        <div>
            {data.length ? <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            /> : <Loading />}
        </div>
    );
}

export default BarChart;