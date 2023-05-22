import "./Searchbar.css";
import SearchIcon from "../../assets/search-icon.png";
import { useCallback, useState } from "react";
import { useDataProvider } from "../../context/DataContext/DataProvider";
export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useDataProvider();

  function debounceFun(searchHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        searchHandler.apply(self, args);
      }, delay);
    };
  }

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const optimizedSearchHandler = useCallback(
    debounceFun(searchHandler, 500),
    []
  );

  return (
    <div className="search-bar">
      <div className="search-bar-left">
        {" "}
        {searchTerm ? `Search results for: ${searchTerm}` : "All articles"}{" "}
      </div>
      <div className="search-bar-right">
        <input
          type="text"
          className="search-bar-right-input-box"
          placeholder="Search articles"
          onChange={optimizedSearchHandler}
        />
        <img
          src={SearchIcon}
          alt="search"
          className="search-bar-right-search-icon"
        />
      </div>
    </div>
  );
};
