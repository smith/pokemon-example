import React, { FunctionComponent } from "react";

export interface NotFoundProps {
  name: string;
}

export const NotFound: FunctionComponent<NotFoundProps> = ({ name }) => {
  return (
    <section>
      <h1>Not found</h1>
      <p>No Pokemon found with name "{name}"</p>
    </section>
  );
};

export default NotFound;
