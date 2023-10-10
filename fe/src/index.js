import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QuantityProvider } from './Context/QuantityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuantityProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuantityProvider>
);
