import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StoreProvider from "container/StoreProvider";
// console.log("StoreProvider from shared",StoreProvider);
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root-auth'));
root.render(
    // <StoreProvider>
    <App/>
    //  </StoreProvider>
);

