import { useStoreDispatch } from "./useStoreDispatch";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../stores/counterSlice";

export default function useStore() {
  const dispatch = useStoreDispatch();
  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  const incrementByAmountCounter = (amount) => {
    dispatch(incrementByAmount(amount));
  };
  return { incrementCounter, decrementCounter, incrementByAmountCounter };
}