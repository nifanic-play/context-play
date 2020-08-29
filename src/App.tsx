import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppContextProvider } from "./context";
import { About, Home, NoMatch, Services, Team } from "./views";
import { Navigation } from "./components";

export const App: FC = () => {
  const history = createBrowserHistory();

  return (
    <AppContextProvider>
      <Router history={history}>
        <div className="App">
          <Navigation />
        </div>
        <Switch>
          <Route path="/" component={Home} strict exact />
          <Route path="/services" component={Services} strict exact />
          <Route path="/about" component={About} strict exact />
          <Route path="/about/team" component={Team} strict exact />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};
