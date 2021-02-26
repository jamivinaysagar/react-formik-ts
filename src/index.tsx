import { render } from "react-dom";
import store from "./store";
import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
