import React from "react";
// import {mount} from 'marketing/MarketingApp';
// import  MarketingApp  from "./components/MarketingApp.js";
import ErrorBoundary from "./ErrorBoundry.js";
// import ErrorBoundary from "./ErrorBoundary";
const MarketingApp = React.lazy(() => import("./components/MarketingApp.js"));
// const RemoteButton = React.lazy(() => import("Remote/Button"));

//  console.log(mount);
function App() {
  return (
    <div className="App">
      <h1>container</h1>
      <hr></hr>
      <React.Suspense fallback='Loading Button'>
      <ErrorBoundary>
        <MarketingApp/>
        </ErrorBoundary>
        </React.Suspense>
      
      
    </div>
  );
}

export default App;
