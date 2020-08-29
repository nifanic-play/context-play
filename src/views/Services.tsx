import React, { useEffect } from "react";
import { compact, isEqual } from "lodash";
import { AppContextActionType, useAppContext } from "../context";

const docTitle: string = "Services";

export const Services: React.FC = () => {
  const { SET_DOC } = AppContextActionType;
  const [state, dispatch] = useAppContext();
  const {
    doc: { titles },
  } = state;

  useEffect(() => {
    dispatch({
      type: SET_DOC,
      payload: {
        titles: ["root","Services"],
      },
    });
  }, []);

  return (
    <>
      <h2>Services</h2>
      <div>
        <div>
          <h4>Expected</h4>
          <code>titles: ["root","Services"]</code>
        </div>
        <div>
          <h4>Actual</h4>
          <code>titles: {JSON.stringify(titles)}</code>
        </div>
      </div>
    </>
  );
};
