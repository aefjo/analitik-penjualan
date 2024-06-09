import React from 'react';
import './css/SalesChart.css';
import BarChartComponent from './ChartJs/BarChartComponent';
import LineChartComponent from './ChartJs/LineChartComponent';

export default function SalesChart() {
  return (
    <div className='container-chart'>
        <div className="box"><LineChartComponent /></div>
        <div className="box"><BarChartComponent /></div>
    </div>
  )
}
