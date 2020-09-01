import React, { FC, useEffect } from "react";
import { DocTitles } from "../context";
import { Body, DocTitle } from "../components";

const docTitles: DocTitles = ["Services", "UX"];

export const Services: FC = () => {

  useEffect(() => {
    console.log("<Services> mounted");

    return () => {
      console.log("<Services> unmounted");
    };
  }, []);

  return (
    <>
      <DocTitle titles={docTitles} />
      <Body header="Services" docTitles={docTitles} />
    </>
  );
};
