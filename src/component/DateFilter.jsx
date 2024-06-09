import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/DateFilter.css';

export default function DateFilter({ sales, setSales }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:3000/sales?start_date=${startDate}&end_date=${endDate}`)
        .then(response => {
          setSales(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    console.log(sales);
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <nav>
      <h3>Analitik Penjualan</h3>
      <div className="periode">
        <input type="date" name="start_date" id="start_date" onChange={handleStartDateChange} />
        <span> s/d </span>
        <input type="date" name="end_date" id="end_date" onChange={handleEndDateChange} />
      </div>
    </nav>
  );
}
