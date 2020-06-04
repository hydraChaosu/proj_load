import React, { useState } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

const Navigation = React.lazy(() => import("./Navigation"));
// import Navigation from "./Navigation";
const PostsList = React.lazy(() => import("./PostsList"));
const Swlist = React.lazy(() => import("./Swlist"));
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <React.Suspense fallback={<Loader />}>
                <PostsList />
              </React.Suspense>
            </Route>
            <Route path="/swlist">
              <React.Suspense fallback={<Loader />}>
                <Swlist />
              </React.Suspense>
            </Route>
          </Switch>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
