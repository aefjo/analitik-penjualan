import React, { useState, useEffect } from 'react';
import './css/SalesTable.css';

export default function SalesTable({ sales }) {

  return (
    <div className="container-table">
        <table>
            <thead>
                <tr>
                    <th data-label="Product">Product</th>
                    <th data-label="Date">Date</th>
                    <th data-label="Sales">Sales</th>
                    <th data-label="Revenue">Revenue</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(data => (
                <tr key={data.id}>
                    <td data-label="Product">{data.product}</td>
                    <td data-label="Date">{data.date}</td>
                    <td data-label="Sales">{data.sales}</td>
                    <td data-label="Revenue">{data.revenue}</td>
                </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}
