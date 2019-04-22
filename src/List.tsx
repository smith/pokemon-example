import React, { FunctionComponent } from "react";

export interface ListProps {
  items: string[];
}

export const List: FunctionComponent<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
