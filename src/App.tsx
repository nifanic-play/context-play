import React, { FC, useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppContextProvider } from "./context";
import { About, Home, NoMatch, Services } from "./views";
import { Navigation } from "./components";

export const App: FC = () => {
  const history = createBrowserHistory();

  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <AppContextProvider>
      <Router history={history}>
        <div className="App">
          <Navigation />
        </div>
        <Switch>
          <Route path="/" component={Home} strict exact />
          <Route path="/services" component={Services} strict />
          <Route path="/about" component={About} strict />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};
