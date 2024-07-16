import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js'
import {Banner,Footer,Error,SubHeader,Promotion,SimilarProducts  } from "shared/Organisms";
import Loader from "./components/Loader.jsx";
// import Header from "shared/Header";
// import SubHeader from "shared/SubHeader";
// import {mount} from 'marketing/MarketingApp';
// import  MarketingApp  from "./components/MarketingApp.js";
import ErrorBoundary from "./ErrorBoundry.js";
// import ErrorBoundary from "./ErrorBoundary";
const Header = React.lazy(() => import("shared/Header"));
// const SubHeader = React.lazy(() => import("shared/SubHeader2"));
const Products =  React.lazy(() => import("shared/FullProducts"));
const MarketingApp = React.lazy(() => import("./components/MarketingApp.js"));
// const Counter = React.lazy(() => import("marketing/Counter"));
// const Counter2 = React.lazy(() => import("./components/Counter.jsx"));



function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader/>}>
        <ErrorBoundary>
           <BrowserRouter>
           <Header />
           {/* <hr></hr>
           <br/> */}
           <SubHeader />
          <Routes>
            <Route exect path="/products" element={<Products/>} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/some" element={<MarketingApp />} />
          </Routes>
          <Footer/>
        </BrowserRouter>

        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

export default App;
