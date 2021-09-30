//npm packages
import React, { createContext, useEffect, useReducer } from "react";
//project files
import ListReducer from "./ListReducer";

export const ListContext = createContext({
  list: [],
  dispatch: () => undefined,
});

let loadedList = [];
const json = localStorage.getItem("localList");
json ? (loadedList = JSON.parse(json)) : (loadedList = []);

export function ListContextProvider({ children }) {
  const [list, dispatch] = useReducer(ListReducer, loadedList);

  //save to local storage when the list's state changes
  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("localList", json);
  }, [list]);

  const context = { list, dispatch };

  return (
    <ListContext.Provider value={context}>{children}</ListContext.Provider>
  );
}
