import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

// TODO: 到底可以重置哪些样式
import "normalize.css";
import "@/assets/css/index.less";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode></React.StrictMode>
  // {/* TODO: 这里不使用suspense会报错 */}
  <Suspense fallback="loading...">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
