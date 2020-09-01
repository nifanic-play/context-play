import React, { FC } from "react";
import compact from "lodash/compact";
import { DocTitles, useAppContextState } from "../context";

interface BodyProps {
  docTitles?: DocTitles;
  header: string;
  parentDocTitles?: DocTitles;
}

export const Body: FC<BodyProps> = (props) => {
  const { header, docTitles = [], parentDocTitles = [] } = props;
  const {
    doc: { titles },
  } = useAppContextState();

  return (
    <>
      <h2>{header}</h2>
      <div>
        <div>
          <h4>Expected</h4>
          <code>titles: {JSON.stringify(compact(["root", ...parentDocTitles, ...docTitles]))}</code>
        </div>
        <div>
          <h4>Context Value</h4>
          <code>titles: {JSON.stringify(titles)}</code>
        </div>
      </div>
    </>
  );
};
