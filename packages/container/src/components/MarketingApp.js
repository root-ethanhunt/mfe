import React, { useRef, useEffect} from 'react'
import  MarketingAppcomponents  from 'order/MarketingApp';
import KuchBhi from 'order/SomeComp';
import Landing from 'order/Landing';
import MarketingAppcomponents1 from 'order/MarketingApp1';
import Counter from "order/Counter";
// debugger
// const MarketingAppcomponents = React.lazy(() => import("order/MarketingApp"));
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
