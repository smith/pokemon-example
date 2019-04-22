import React, { Component } from "react";

import NotFound from "./NotFound";
import Pokemon from "./Pokemon";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Pokedex</h1>
          <Search />
        </header>
        <Pokemon name="squirtle" />
        <NotFound name="squirtle" />
      </main>
    );
  }
}

export default App;
