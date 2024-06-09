import React from 'react';
import './css/Statistics.css';

export default function Statistics({ sales }) {
  
    // Menghitung total penjualan
    const totalSales = sales.reduce((total, sale) => total + sale.sales, 0);

    // Menghitung total pendapatan
    const totalRevenue = sales.reduce((total, sale) => total + sale.revenue, 0);

    // Mencari produk terlaris berdasarkan jumlah penjualan tertinggi
    const mostSoldProduct = sales.length > 0
    ? sales.reduce((maxSale, sale) => (sale.sales > maxSale.sales ? sale : maxSale), sales[0])
    : { product: '', sales: 0 }; 

    console.log(mostSoldProduct);

    return (
    <div className='container-statistics'>
        <div className="box">
            <div>
                <span>Total Penjualan</span>
                <h1>{totalSales}</h1>
            </div>
        </div>
        <div className="box">
            <div>
                <span>Total Pendapatan</span>
                <h1>{totalRevenue}</h1>
            </div>
        </div>
        <div className="box">
            <div>
                <span>Produk Terlaris</span>
                <h1>{mostSoldProduct.product}</h1>
            </div>
        </div>
    </div>
  )
}
