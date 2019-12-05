import React from "react";
import { Statistic } from 'semantic-ui-react';
import { useCounterContext } from '../context/CounterContext';

export default function CounterDisplay() {
  //Step 4: Consume the context to access the shared state
  const { count } = useCounterContext();
  return (
    <Statistic>
      <Statistic.Value>{count}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}