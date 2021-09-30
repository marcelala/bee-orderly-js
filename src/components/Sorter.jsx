//npm packages
import React, { useState } from "react";
//projectFiles
import { useList } from "../context/list/ContextHook";

export default function Sorter() {
  //global state
  const { dispatch, list } = useList();
  //local state
  const unsorted = [{ byName: false }, { byPrice: false }];
  const [activeSorter, setActiveSorter] = useState(unsorted);
  //methods
  function selectSorter(id, checked) {
    const sorterSelected = { [id]: checked };
    setActiveSorter(sorterSelected);
  }
  function handleSortingByName() {
    selectSorter("byName", activeSorter.byName);
    const sortedByName = list.sort((a, b) =>
      a.name.localeCompare(b.name, "sv")
    );
    dispatch({ type: "SET_LIST", payload: sortedByName });
  }
  function handleSortingByPrice() {
    selectSorter("byPrice", activeSorter.byPrice);
    const sortedByPrice = list.sort((a, b) => a.price - b.price);
    dispatch({ type: "SET_LIST", payload: sortedByPrice });
  }
  return (
    <section className="sorter">
      <h4 className="sort-label">Sort by:</h4>
      <div className="btn-sort byName">
        <label htmlFor="byName">
          <input
            id="byName"
            type="checkbox"
            checked={(activeSorter.byName = true)}
            onChange={() => handleSortingByName()}
          />
          A→Z
        </label>
      </div>
      <div className="btn-sort byPrice">
        <label htmlFor="byPrice">
          <input
            id="byPrice"
            type="checkbox"
            checked={(activeSorter.byPrice = true)}
            onChange={() => handleSortingByPrice()}
          />
          Price
        </label>
      </div>
    </section>
  );
}
