import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from "container/StoreProvider";
console.log("StoreProvider from shared",StoreProvider);
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root-shared'));
root.render(
    <StoreProvider>
    <App/> </StoreProvider>
);


// const marketingEl = document.getElementById("marketingMfe");
// if (marketingEl) {
//   const root = ReactDOM.createRoot(marketingEl);
//   root.render(<App/>)
// }

// export {marketingEl}