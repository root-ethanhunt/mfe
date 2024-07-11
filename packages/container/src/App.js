import React from "react";
import Header from 'shared/Header'
import SubHeader from 'shared/SubHeader'
// import {mount} from 'marketing/MarketingApp';
// import  MarketingApp  from "./components/MarketingApp.js";
import ErrorBoundary from "./ErrorBoundry.js";
// import ErrorBoundary from "./ErrorBoundary";
const MarketingApp = React.lazy(() => import("./components/MarketingApp.js"));

// const RemoteButton = React.lazy(() => import("Remote/Button"));
console.log(Header)
//  console.log(mount);
function App() {
  return (
    <div className="App">
      {/* <h1>container</h1> */}
      <React.Suspense fallback='Loading Button'>
      <ErrorBoundary>
      <Header/>
      <hr></hr>
      <SubHeader/>
        <MarketingApp/>
        </ErrorBoundary>
        </React.Suspense>
      
      
    </div>
  );
}

export default App;
