import React, { useEffect } from "react";
import { AppContextActionType, useAppContext } from "../context";

const docTitle: string = "Home";

export const Home: React.FC = () => {
  const { SET_DOC } = AppContextActionType;
  const [state, dispatch] = useAppContext();
  const {
    doc: { titles },
  } = state;

  useEffect(() => {
    dispatch({
      type: SET_DOC,
      payload: {
        titles: ["root","Home"],
      },
    });
  },[]);

  interface Foo { bar:number, zomg: string};

  const foos:Foo[] = [];




  return (
    <>
      {foos.map(({bar,zomg})=><li key={bar}>{zomg}</li>)}
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
