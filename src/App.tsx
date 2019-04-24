import React, { ChangeEvent, FunctionComponent } from "react";

import Pokemon from "./Pokemon";

export const App: FunctionComponent = () => {
  const searchQuery = "squirtle";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value);

  return (
    <main>
      <header>
        <h1>Pokedex</h1>
        <input
          autoFocus
          defaultValue={searchQuery}
          onChange={handleChange}
          type="search"
          placeholder="Search Pokemon by name"
        />
      </header>
      {searchQuery && <Pokemon name={searchQuery} />}
    </main>
  );
};

export default App;
