import React, { FC, useEffect } from "react";
import { DocTitles } from "../../../context";
import { Body, DocTitle } from "../../../components";

const docTitles: DocTitles = ["Team"];

export const Team: FC = () => {
  useEffect(() => {
    console.log("About/Team mounted");
  }, []);

  return (
    <>
      <DocTitle titles={docTitles} />
      <Body header="About / Team" docTitles={docTitles} parentDocTitles={["About"]} />
    </>
  );
};
