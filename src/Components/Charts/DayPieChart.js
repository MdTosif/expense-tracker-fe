import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { dayChartData } from '../../Apis/Api';
import Loading from '../Loading';

function DayPieChart(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        dayChartData().then((el) => { setData([["days", "Expense"], ...el]) })
    },[])

    return (
        <div>
            {data.length ? <Chart
                chartType='PieChart'
                data={data}
                options={{
                    title: "Expense by day",
                    is3D: true,
                }}
                width={"100%"}
                height={"400px"}
            /> : <Loading />}
        </div>
    );
}

export default DayPieChart;