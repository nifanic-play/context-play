import React, { FC, useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { DocTitles } from "../../../context";
import { Body, DocTitle, getElementsByLabel, LABEL, ViewShape } from "../../../components";
import { NoMatch, TeamMember } from "../../../views";

const docTitles: DocTitles = ["Team"];
const teamMembers: ViewShape[] = getElementsByLabel(LABEL.TEAM);

export const Team: FC = () => {
  const { url } = useRouteMatch();

  useEffect(() => {
    console.log("<About/Team> mounted");

    return () => {
      console.log("<About/Team> unmounted");
    }
  }, []);

  return (
    <>
      <DocTitle titles={docTitles} />
      <Switch>
        <Route path={`${url}`} exact>
          <Body header="About / Team" docTitles={docTitles} parentDocTitles={[LABEL.ABOUT]} />
          {teamMembers?.length > 0 && (
            <>
              <p>Visit team member pages:</p>
              <ol>
                {teamMembers.map(({ label, to }, i) => (
                  <li key={i}>
                    <Link to={url + to}>{label}</Link>
                  </li>
                ))}
              </ol>
            </>
          )}
        </Route>
        <Route path={`${url}/:name(amir|nick)`} strict>
          <TeamMember />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};
