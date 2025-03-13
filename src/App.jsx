import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [coupon, setCoupon] = useState('');

  const claimCoupon = async () => {
    try {
      const response = await axios.get('https://couponapp-backend.onrender.com/claim-coupon');
      setMessage(response.data.message);
      setCoupon(response.data.coupon_code);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="App">
      <h1>Coupon Distribution</h1>
      <button onClick={claimCoupon}>Claim Coupon</button>
      <p>{message}</p>
      {coupon && <p>Your coupon code is: {coupon}</p>}
    </div>
  );
}

export default App;
