import React from 'react';
import './SearchBar.css';
import {SearchInputBox} from "../SearchInputBox/SearchInputBox";
import {SearchButton} from "../SearchButton/SearchButton";

export const SearchBox = (props) => {
  return (
      <div className={props.SearchBoxClass}>
        <SearchInputBox />
        <SearchButton />
      </div>
  )
};

SearchBox.defaultProps = {
  SearchBoxClass: 'SearchBar'
};
