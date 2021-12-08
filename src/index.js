import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/aos/dist/aos.css"; // You can also use <link> for styles
import '../node_modules/swiper/swiper-bundle.css';
// ..
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
// ..
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
