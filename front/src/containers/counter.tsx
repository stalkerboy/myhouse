import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, getServerCountAsync, increase } from "../redux/counter";
import { RootState } from "../redux";
export interface CounterContainerProps {}

const CounterContainer = (props: CounterContainerProps) => {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.counterProfile.data?.count);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  // const onIncreaseBy = (diff: number) => {
  //   dispatch(increaseBy(diff));
  // };

  const onServerCount = (suggestion: number) => {
    dispatch(getServerCountAsync.request(suggestion));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      {/* <button onClick={() => onIncreaseBy(5)}>+5</button> */}
      <button onClick={() => onServerCount(100)}> serverCount</button>
    </div>
  );
};

export default CounterContainer;
