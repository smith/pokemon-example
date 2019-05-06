import React, { FunctionComponent } from "react";

import loadingGif from "./loading.gif";

export const Loading: FunctionComponent = () => (
  <img src={loadingGif} alt="Loading…" />
);

export default Loading;
