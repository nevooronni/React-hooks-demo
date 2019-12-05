import { useState } from 'react';
import createUseContext from 'constate'; //state context object creator

//step 1: create a custom hook that contains your state and actions
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return { count, increment, decrement };
}

//step 2: Declare your context state object to share the state with other components 
export const useCounterContext = createUseContext(useCounter);