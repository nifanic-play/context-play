import React, { FC, useEffect } from "react";
import { AppContextActionType, DocTitles, useAppContextDispatch } from "../context";

interface DocTitleProps {
  titles?: DocTitles;
}

const { ADD_TITLES, REMOVE_TITLES } = AppContextActionType;

export const DocTitle: FC<DocTitleProps> = (props) => {
  const { titles: payload } = props;
  const dispatch = useAppContextDispatch();

  useEffect(() => {

    const setDocTitles = () => {
      if (!payload?.length) return;

      dispatch({
        type: ADD_TITLES,
        payload,
      });

      return () => {
        dispatch({
          type: REMOVE_TITLES,
          payload,
        });
      };
    };

    return setDocTitles();
  }, [dispatch, payload]);

  return <></>;
};
