import { useContext } from "react";
import { ListContext } from "./ListContext";

export function useList() {
  const list = useContext(ListContext);
  if (!list) {
    throw new Error("Uh oh, where is my list?");
  }
  return list;
}
