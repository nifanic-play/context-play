import React, { createContext, Dispatch, Reducer, useContext, useReducer } from "react";

export interface AppStateDoc {
  title: string;
  titles: string[];
}

type AppStatePayloads = AppStateDoc;

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
  SET_DOC = "SET_DOC",
}

const { SET_DOC } = AppContextActionType;

interface Action<T extends AppContextActionType, P extends AppStatePayloads> {
  type: T;
  payload: Partial<P>;
}

type SetDocAction = Action<typeof SET_DOC, AppStateDoc>;
export type AppContextActions = SetDocAction;

export const ContextState = createContext<AppState | undefined>(undefined);
ContextState.displayName = "AppContextState";

export const ContextDispatch = createContext<Dispatch<AppContextActions> | undefined>(undefined);
ContextDispatch.displayName = "AppContextDispatch";

const AppContextReducer: Reducer<AppState, AppContextActions> = (state, action): AppState => {
  switch (action.type) {
    case SET_DOC:
      return { ...state, doc: { ...state.doc, ...action.payload } };
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
