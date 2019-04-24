import React, { FunctionComponent } from "react";

export interface SearchProps {
  defaultValue: string;
}

export const Search: FunctionComponent<SearchProps> = ({
  defaultValue = ""
}) => {
  return (
    <input
      autoFocus
      defaultValue={defaultValue}
      type="search"
      placeholder="Search Pokemon by name"
    />
  );
};

export default Search;
