//npm packages
import React, { createContext, useReducer, useEffect, useContext } from "react";
//project files
import ListReducer from "./ListReducer";
import { SET_LIST } from "./ListActions";

export const ListContext = createContext({
  list: [],
  dispatch: () => undefined,
});

export function ListContextProvider({ children }) {
  const [list, dispatch] = useReducer(ListReducer, []);
  const contextValue = { list, dispatch };

  //load list from local storage
  useEffect(() => {
    const json = localStorage.getItem("localList");
    const loadedList = JSON.parse(json);
    dispatch({
      type: SET_LIST,
      payload: loadedList,
    });
  }, []);

  //save to local storage when the list's state changes
  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("localList", json);
  }, [list]);

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
}

export function useList() {
  const list = useContext(ListContext);
  if (!list) {
    throw new Error("Uh oh, where is my list?");
  }
  return list;
}
