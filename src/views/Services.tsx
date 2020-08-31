import React, { FC } from "react";
import { DocTitles } from "../context";
import { Body, DocTitle } from "../components";

const docTitles: DocTitles = ["Services", "UX"];

export const Services: FC = () => {
  return (
    <>
      <DocTitle titles={docTitles} />
      <Body header="Services" docTitles={docTitles} />
    </>
  );
};
