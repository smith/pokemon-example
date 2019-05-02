import React, { FunctionComponent } from "react";

import notFoundGif from "./notFound.gif";
export interface NotFoundProps {
  name: string;
}

export const NotFound: FunctionComponent<NotFoundProps> = ({ name }) => {
  return (
    <section>
      <img alt="Sad Squirtle" src={notFoundGif} />
      <h1>Sorry</h1>
      <p>No Pokemon was found with the name "{name}"</p>
    </section>
  );
};

export default NotFound;
