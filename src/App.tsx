import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductComparision } from './pages/comparision/components/product-camparision';
import { ProductTable } from './pages/comparision/components/product-table';

function App() {
  return (
    <div className="App">
      <ProductComparision />
      <ProductTable />
    </div>
  );
}

export default App;
