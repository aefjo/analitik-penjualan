import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import DateFilter from "./component/DateFilter";
import Statistics from "./component/Statistics";
import SalesChart from './component/SalesChart';
import SearchBar from './component/SearchBar';
import SalesTable from './component/SalesTable';
// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='*' element={<NotFound />} />
//     </Routes>
//   );
// }

function App() {

  const [sales, setSales] = useState([]);
  const [product, setProduct] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
      axios.get('http://localhost:3000/sales')
        .then(response => {
          setSales(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    // const fetchSalesByProduct = () => {
    //   axios.get(`http://localhost:3000/sales?product=${product}`)
    //     .then(response => {
    //       setSales(response.data);
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    // };


    const fetchSalesByProduct = () => {
      let query = 'http://localhost:3000/sales?';
      if (product) query += `product=${product}&`;
      if (startDate) query += `date_gte=${startDate}&`;
      if (endDate) query += `date_lte=${endDate}&`;
  
      axios.get(query)
        .then(response => {
          setSales(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    console.log(sales);

  return (
    <>
        <DateFilter sales={sales} setSales={setSales} />
        <SearchBar sales={sales} setSales={setSales} />
        <Statistics sales={sales} />
        <SalesChart />
        <SalesTable sales={sales} />
    </>
  );
}

export default App;
