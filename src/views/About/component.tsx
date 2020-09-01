import React, { FC, useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { DocTitles } from "../../context";
import { Body, DocTitle } from "../../components";
import { Team } from "./Team";
import { NoMatch } from "../NoMatch";

const docTitles: DocTitles = ["About"];

export const About: FC = () => {
  const { url } = useRouteMatch();

  useEffect(() => {
    console.log("About mounted");
  }, []);

  return (
    <>
      <DocTitle titles={docTitles} />
      <Switch>
        <Route path={`${url}`} exact>
          <Body header="About" docTitles={docTitles} />
          <p>
            Visit the <Link to="/about/team">Team</Link> page.
          </p>
        </Route>
        <Route path={`${url}/team`} strict>
          <Team />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};
