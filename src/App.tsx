import React, {
  ChangeEvent,
  FunctionComponent,
  Suspense,
  lazy,
  useState
} from "react";

import Loading from "./Loading";

const Pokemon = lazy(() => import("./Pokemon"));

export const App: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

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
      {searchQuery && (
        <Suspense fallback={<Loading />}>
          <Pokemon name={searchQuery} />
        </Suspense>
      )}
    </main>
  );
};

export default App;
