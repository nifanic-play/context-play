import React, { useEffect } from "react";
import { compact, isEqual } from "lodash";
import { AppContextActionType, useAppContext } from "../context";

const docTitle: string = "Home";
let initialTitles: string[] = [];

export const Home: React.FC = () => {
  const { SET_DOC } = AppContextActionType;
  const [state, dispatch] = useAppContext();
  const {
    doc: { titles },
  } = state;

  const setDocTitles = () => {
    /**
     * On mount, preserve `initialTitles`, which will reset context on unmount.
     */
    if (!initialTitles.length) initialTitles = [...titles];

    const mergedTitles = compact([...initialTitles, docTitle]);

    if (!isEqual(mergedTitles, titles)) {
      dispatch({
        type: SET_DOC,
        payload: {
          titles: mergedTitles,
        },
      });
    }

    return () => {
      if (isEqual(initialTitles, titles)) return;

      dispatch({
        type: SET_DOC,
        payload: {
          titles: initialTitles,
        },
      });
    };
  };

  useEffect(() => {
    const resetDocTitles = setDocTitles();

    return resetDocTitles;
  });

  return (
    <>
      <h2>Home</h2>
      <div>
        <div>
          <h4>Expected</h4>
          <code>titles: ["root","Home"]</code>
        </div>
        <div>
          <h4>Actual</h4>
          <code>titles: {JSON.stringify(titles)}</code>
        </div>
      </div>
    </>
  );
};
