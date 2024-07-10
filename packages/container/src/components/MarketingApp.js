import React, { useEffect} from 'react'
import  MarketingAppcomponents  from 'marketing/MarketingApp';
import KuchBhi from 'marketing/SomeComp';
import Landing from 'marketing/Landing';
import MarketingAppcomponents1 from 'marketing/MarketingApp1';

// const MarketingAppcomponents = React.lazy(() => import("marketing/MarketingApp"));
console.log(KuchBhi);
 console.log(MarketingAppcomponents);
 console.log(Landing);
 console.log(MarketingAppcomponents1);

function MarketingApp() {
  return (
    <MarketingAppcomponents1/>
  )
}

export default MarketingApp;
