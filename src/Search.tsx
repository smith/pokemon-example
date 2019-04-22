import React, { FunctionComponent } from "react";

export interface SearchProps {}

export const Search: FunctionComponent<SearchProps> = props => {
  return <input type="search" placeholder="Search Pokemon by name" />;
};

export default Search;
