import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface _Feature_Name_State {
  state: boolean;
}

const _feature_Name_State: _Feature_Name_State = {
  state: false,
};

export const _Feature_Name_Context = createContext<{
  state: _Feature_Name_State;
  setState: (state: _Feature_Name_State) => void;
}>({
  state: _feature_Name_State,
  setState: () => null,
});

export default function _Feature_Name_ContextProvider(
  props: PropsWithChildren<unknown>
) {
  const { children } = props;

  const [currentState, setCurrentState] =
    useState<_Feature_Name_State>(_feature_Name_State);

  const setMemoState = useCallback(
    (state: boolean) => setCurrentState(state),
    []
  );
  const memoState = useMemo(() => currentState, [currentState]);

  const value = {
    state: memoState,
    setState: setMemoState,
  };

  return (
    <_Feature_Name_Context.Provider value={value}>
      {children}
    </_Feature_Name_Context.Provider>
  );
}
