import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const maxValue = Math.max(...props.chartData.map(chartPoint => {return chartPoint.value}));

    return <div className="chart">
        {props.chartData.map((chartPoint) => {
            
            return <ChartBar
            key={chartPoint.label}
            label={chartPoint.label} 
            value={chartPoint.value} 
            maxValue={maxValue}
        />
        })}
    </div>;
};

export default Chart;