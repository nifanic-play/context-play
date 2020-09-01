import React, { FC, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { DocTitles } from "../../../../context";
import { Body, DocTitle, LABEL } from "../../../../components";

const data: { id: string; name: string }[] = [
  { id: "amir", name: "Amir" },
  { id: "nick", name: "Nick" },
];

const { ABOUT, TEAM } = LABEL;

export const TeamMember: FC = () => {
  const {
    params: { name },
  } = useRouteMatch<{ name: string }>();
  const { name: memberName } = data.find((f) => f.id === name) || { name: "" };
  const docTitles: DocTitles = [memberName];

  useEffect(() => {
    console.log(`About/Team/${memberName} mounted`);
  }, [memberName]);

  return (
    <>
      <DocTitle titles={docTitles} />
      <Body
        header={`About / Team / Member ${memberName ? `(${memberName})` : ""}`}
        docTitles={docTitles}
        parentDocTitles={[ABOUT, TEAM]}
      />
    </>
  );
};
