import AppLayout from "../containers/layout/AppLayout";
import CounterContainer from "../containers/counter";

export default function Home() {
  return (
    <AppLayout>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.NEXT_PUBLIC_API_URL}</div>
      <CounterContainer />
    </AppLayout>
  );
}
