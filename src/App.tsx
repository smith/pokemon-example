import React, { FunctionComponent } from "react";

import Pokemon from "./Pokemon";
import Search from "./Search";

export const App: FunctionComponent = () => {
  const searchQuery = "squirtle";

  return (
    <main>
      <header>
        <h1>Pokedex</h1>
        <Search defaultValue={searchQuery} />
      </header>
      {searchQuery && <Pokemon name={searchQuery} />}
    </main>
  );
};

export default App;
