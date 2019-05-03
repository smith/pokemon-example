import React, { FunctionComponent } from "react";

export interface ListProps {
  description: string;
  hidden: boolean;
  items: string[];
  onChange: () => void;
}

export const ToggleableList: FunctionComponent<ListProps> = ({
  description,
  hidden,
  items,
  onChange
}) => {
  return (
    <div className="ToggleableList">
      <button onClick={onChange}>
        {hidden ? "Show" : "Hide"} {description}
      </button>

      {!hidden && (
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleableList;
