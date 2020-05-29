import React, { useState } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Button from "@material-ui/core/Button";

const Navigation = React.lazy(() => import("./Navigation"));
// import Navigation from "./Navigation";
const PostsList = React.lazy(() => import("./PostsList"));
function App() {
  const [pageNr, setPageNr] = useState(0);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/">
              <React.Suspense fallback={<Loader />}>
                <PostsList pageNr={pageNr} />
              </React.Suspense>
            </Route>
          </Switch>
          <div className="buttonContainer">
            <Button
              variant="contained"
              color="primary"
              size="big"
              onClick={() => {
                setPageNr(pageNr + 1);
              }}
            >
              Load more
            </Button>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
