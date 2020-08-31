import React, { FC, useEffect } from "react";
import { Body, DocTitle } from "../components";

export const Home: FC = () => {
  useEffect(() => {
    console.log("Home mounted");
  }, []);

  return (
    <>
      <DocTitle />
      <Body header="Home" />
    </>
  );
};
