import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
import useStore from "container/useStore";
import  {useStoreSelector}  from "container/useStoreSelector";
// const useStore = React.lazy(() => import("container/useStore"));
// const useStoreSelector = React.lazy(() => import("container/useStoreSelector"));

export default function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
const {
    decrementCounter,
    incrementByAmountCounter,
    incrementCounter,
    // getProductList,
  } = useStore();
  const count = useStoreSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => incrementCounter()}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => decrementCounter()}
        >
          Decrement
        </button>

        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => incrementByAmountCounter(5)}
        >
         Increment by 5
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => incrementByAmountCounter(-5)}
        >
          Increment by -5
        </button>
      </div>
    </div>
  )
}