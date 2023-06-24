import React, { createContext, Reducer, useMemo, useReducer } from "react";
import { calenderReducer, initialState } from "../reducers/calender.reducer";

export const calenderContext = createContext(null);

export const CalenderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calenderReducer, initialState);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <calenderContext.Provider value={value}>
      {children}
    </calenderContext.Provider>
  );
};
