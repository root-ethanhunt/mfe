import React, { useRef, useEffect} from 'react'
import  MarketingAppcomponents  from 'marketing/MarketingApp';
import KuchBhi from 'marketing/SomeComp';
import Landing from 'marketing/Landing';
import MarketingAppcomponents1 from 'marketing/MarketingApp1';
import Counter from "marketing/Counter";
// debugger
// const MarketingAppcomponents = React.lazy(() => import("marketing/MarketingApp"));
console.log(KuchBhi);
 console.log(MarketingAppcomponents);
 console.log(Landing);
 console.log(MarketingAppcomponents1);
 console.log(Counter);


function MarketingApp() {
    // const ref = useRef(null);

    // useEffect(()=>{
    //     MarketingAppcomponents(ref.current);
    // },[])
  return (
    // <div ref ={ref}/>
    // <div>hii</div>
    //  <MarketingAppcomponents/>
    //  <MarketingAppcomponents1/>
    <Counter/>
    // <KuchBhi/>
  )
}

export default MarketingApp;
