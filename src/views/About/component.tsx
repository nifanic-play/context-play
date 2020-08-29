import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContextActionType, useAppContext } from "../../context";

const docTitle: string = "About";

export const About: React.FC = () => {
  const { SET_DOC } = AppContextActionType;
  const [state, dispatch] = useAppContext();
  const {
    doc: { titles },
  } = state;

  useEffect(() => {
    dispatch({
      type: SET_DOC,
      payload: {
        titles: ["root","About"],
      },
    });
  },[]);

  return (
    <>
      <h2>About</h2>
      <div>
        <div>
          <h4>Expected</h4>
          <code>titles: ["root","About"]</code>
        </div>
        <div>
          <h4>Actual</h4>
          <code>titles: {JSON.stringify(titles)}</code>
        </div>
      </div>
      <p>
        Visit the <Link to="/about/team">Team</Link> page.
      </p>
    </>
  );
};
