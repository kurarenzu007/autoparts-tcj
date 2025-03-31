import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './pages/checkout';
import ProductDetails from './pages/ProductDetails';
import BrandPage from './pages/BrandPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/brands/:brand" element={<BrandPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;