//npm packages
import React, { useState } from "react";
//projectFiles
import { useList } from "../context/list/ContextHook";

export default function Sorter() {
  //global state
  const { list, dispatch } = useList();
  //local state
  const [activeSorter, setActiveSorter] = useState("");
  //methods
  function sortListByName() {
    return list
      .slice()
      .sort((a, b) => a.taskName.localeCompare(b.taskName, "sv"));
  }
  function sortListByDate() {
    return list.slice().sort((a, b) => b.id - a.id);
  }
  function sortList(type) {
    if (type === "byName") return sortListByName();
    else if (type === "byDate") return sortListByDate();
  }
  function handleSorting(e) {
    setActiveSorter(e.target.value);
    const sortedList = sortList(e.target.value);
    dispatch({ type: "SET_LIST", payload: sortedList });
  }
  return (
    <section className="sorter">
      <h4 className="sort-label">Sort by:</h4>
      <div className="btn-sort byName">
        <label htmlFor="byName">
          <input
            id="byName"
            type="radio"
            value={"byName"}
            checked={activeSorter === "byName"}
            onChange={handleSorting}
          />
          A→Z
        </label>
      </div>
      <div className="btn-sort byPrice">
        <label htmlFor="byDate">
          <input
            id="byDate"
            type="radio"
            value={"byDate"}
            checked={activeSorter === "byDate"}
            onChange={handleSorting}
          />
          Recently added
        </label>
      </div>
    </section>
  );
}
