import { FC, useEffect } from "react";
import { AppContextActionType, DocTitles, useAppContext } from "../context";

interface DocTitleProps {
  titles?: DocTitles;
}

const { ADD_TITLES, REMOVE_TITLES } = AppContextActionType;

export const DocTitle: FC<DocTitleProps> = (props) => {
  const { titles: payload } = props;
  const [
    {
      doc: { titles },
    },
    dispatch,
  ] = useAppContext();

  useEffect(() => {
    document.title = [...titles].reverse().join(" / ");
  });

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

  return null;
};
