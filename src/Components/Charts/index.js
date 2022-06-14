import React from 'react';
import BarChart from './BarChart';
import DayPieChart from './DayPieChart';
import Tabs from './../Tabs';

function Charts(props) {
    return (
        <div>
            <DayPieChart/>
            <BarChart/>
            <Tabs/>
        </div>
    );
}

export default Charts;