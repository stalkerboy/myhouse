import { Provider } from "react-redux";
import { store } from "../redux";
import "./index.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default MyApp;
