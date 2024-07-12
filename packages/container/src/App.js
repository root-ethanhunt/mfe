import React from "react";

// import Header from "shared/Header";
// import SubHeader from "shared/SubHeader";
// import {mount} from 'marketing/MarketingApp';
// import  MarketingApp  from "./components/MarketingApp.js";
import ErrorBoundary from "./ErrorBoundry.js";
// import ErrorBoundary from "./ErrorBoundary";
const Header = React.lazy(() => import("shared/Header"));
const SubHeader = React.lazy(() => import("shared/SubHeader2"));
const Products =  React.lazy(() => import("shared/FullProducts"));
// const MarketingApp = React.lazy(() => import("./components/MarketingApp.js"));

// const RemoteButton = React.lazy(() => import("Remote/Button"));
console.log(Header);
console.log(SubHeader);


function App() {
  return (
    <div className="App">
      {/* <h1>container</h1> */}
      <React.Suspense fallback="Loading Button">
        <ErrorBoundary>
          <Header />
          <hr></hr>
          <SubHeader />
          <Products/>
          {/* <MarketingApp /> */}
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

export default App;
