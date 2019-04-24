import React, { FunctionComponent } from "react";

export interface NotFoundProps {
  name: string;
}

export const NotFound: FunctionComponent<NotFoundProps> = ({ name }) => {
  return (
    <section>
      <h1>Sorry</h1>
      <p>No Pokemon was found with the name "{name}"</p>
    </section>
  );
};

export default NotFound;
