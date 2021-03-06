import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReactQueryConfigProvider } from "react-query";
import LoadingIndicator from "./Loader";
const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
};

ReactDOM.render(
  <ReactQueryConfigProvider config={queryConfig}>
    <React.Suspense fallback={<LoadingIndicator />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </ReactQueryConfigProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
