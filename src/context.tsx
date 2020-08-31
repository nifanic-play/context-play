import React, { createContext, Dispatch, Reducer, useContext, useReducer } from "react";

export type DocTitles = string[];

export interface AppStateDoc {
  title: string;
  titles: DocTitles;
}

type AppStatePayloads = AppStateDoc | DocTitles;

export interface AppState {
  doc: AppStateDoc;
}

const baseTitle = "root";

export const initialAppContext: AppState = {
  doc: {
    title: baseTitle,
    titles: [baseTitle],
  },
};

export enum AppContextActionType {
  ADD_TITLES = "ADD_TITLES",
  REMOVE_TITLES = "REMOVE_TITLES",
}

const { ADD_TITLES, REMOVE_TITLES } = AppContextActionType;

interface Action<T extends AppContextActionType, P extends AppStatePayloads> {
  type: T;
  payload: P;
}

type UpdateTitles = Action<typeof ADD_TITLES | typeof REMOVE_TITLES, DocTitles>;
export type AppContextActions = UpdateTitles;

export const ContextState = createContext<AppState | undefined>(undefined);
ContextState.displayName = "AppContextState";

export const ContextDispatch = createContext<Dispatch<AppContextActions> | undefined>(undefined);
ContextDispatch.displayName = "AppContextDispatch";

const AppContextReducer: Reducer<AppState, AppContextActions> = (state, action): AppState => {
  switch (action.type) {
    case ADD_TITLES:
      return {
        doc: { ...state.doc, titles: [...state.doc.titles, ...action.payload!] },
      };
    case REMOVE_TITLES:
      const { length } = action.payload;

      state.doc.titles.splice(-length, length);
      action.payload = [];

      return {
        doc: { ...state.doc, titles: state.doc.titles },
      };
    default:
      return state;
  }
};

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppContextReducer, initialAppContext);

  return (
    <ContextState.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>{children}</ContextDispatch.Provider>
    </ContextState.Provider>
  );
};

export const useAppContextState = () => {
  const context = useContext(ContextState);

  if (!context) throw new Error("`useAppContextState` must be used within `AppContextState`");

  return context;
};

export const useAppContextDispatch = () => {
  const context = useContext(ContextDispatch);

  if (!context) throw new Error("`useAppContextDispatch` must be used within `AppContextDispatch`");

  return context;
};

export const useAppContext = () => [useAppContextState(), useAppContextDispatch()] as const;
