import React from 'react';
import './SearchBar.css';
import {SearchInputBox} from "../SearchInputBox/SearchInputBox";
import {SearchButton} from "../SearchButton/SearchButton";

export const SearchBox = (props) => {
  const comp = `SearchBar`;

  return (
      <div className={comp}>
        <SearchInputBox />
        <SearchButton />
      </div>
  )
};

