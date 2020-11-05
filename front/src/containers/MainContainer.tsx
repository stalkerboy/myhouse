import React from "react";
import CounterContainer from "./CounterContainer";
import AppLayout from "./layout/AppLayout";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (
    <AppLayout>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.NEXT_PUBLIC_API_URL}</div>
      <CounterContainer />
    </AppLayout>
  );
};
