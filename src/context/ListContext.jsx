//npm packages
import React, { createContext, useReducer, useEffect, useContext } from "react";
//project files
import ListReducer from "./ListReducer";
import { SET_LIST } from "./ListActions";

export const ListContext = createContext({
  list: [],
  dispatch: () => undefined,
});

let loadedList = [];
const json = localStorage.getItem("localList");
json ? (loadedList = JSON.parse(json)) : (loadedList = []);

export function ListContextProvider({ children }) {
  const [list, dispatch] = useReducer(ListReducer, loadedList);
  const contextValue = { list, dispatch };

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
