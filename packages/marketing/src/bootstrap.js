import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from "container/StoreProvider";
console.log("StoreProvider",StoreProvider);
// import reportWebVitals from './reportWebVitals';

// const mount = (el) => {
//   ReactDOM.render(<App/>, el);
// }


// if(process.env.NODE_ENV === 'development'){
//     const devRoot = document.getElementById("marketingMfe");

//     if(devRoot){
//         mount(devRoot);
//     }
// }

// export {mount};


const marketingEl = document.getElementById("marketingMfe");
if (marketingEl) {
  const root = ReactDOM.createRoot(marketingEl);
  root.render(<StoreProvider>
    <App/> </StoreProvider>)
}

export {marketingEl}

// const root = ReactDOM.createRoot(document.getElementById('marketingMfe'));
// root.render(
//     <App />
// );


