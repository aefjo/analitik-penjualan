import React, { useState, useEffect } from 'react';
import './css/SearchBar.css';
import axios from 'axios';

export default function SearchBar({ sales, setSales }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/sales')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const uniqueProducts = new Set();
  const filteredSales = product.filter(item => {
    if (uniqueProducts.has(item.product)) {
      return false;
    } else {
      uniqueProducts.add(item.product);
      return true;
    }
  });

  const handleProductChange = (event) => {
    const selectedProduct = event.target.value;

    axios.get(`http://localhost:3000/sales?product=${selectedProduct}`)
      .then(response => {
        setSales(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));

    console.log(selectedProduct);
  };

  return (
    <div className='container-search-bar'>
      <label htmlFor="product">Search Product : </label>
      <select name="product" id="product" onChange={handleProductChange}>
        <option value="">All</option>  
        {filteredSales.map(data => (
          <option key={data.id} value={data.product}>{data.product}</option>  
        ))}
      </select>
    </div>
  )
}
