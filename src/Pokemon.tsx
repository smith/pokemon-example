import React, { FunctionComponent } from "react";

import List from "./List";
import data from "./squirtle.json";

export interface PokemonProps {
  name: string;
}

export const Pokemon: FunctionComponent<PokemonProps> = ({ name }) => {
  const { base_experience, height, types, weight } = data;
  const img = data.sprites.front_default;

  const areAbilitiesShowing = true;
  const toggleAbilities = () => {};

  const areMovesShowing = true;
  const toggleMoves = () => {};

  return (
    <section>
      <h1>{name}</h1>
      <img src={img} />
      <table>
        <thead>
          <tr>
            <th>Base experience</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{base_experience}</td>
            <td>{height}</td>
            <td>{weight}</td>
            <td>{types.map(item => item.type.name).join(", ")}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={toggleAbilities}>
        {areAbilitiesShowing ? "Hide abilities" : "Show abilities"}
      </button>
      <List items={data.abilities.map(item => item.ability.name)} />
      <button onClick={toggleMoves}>
        {areMovesShowing ? "Hide moves" : "Show moves"}
      </button>
      <List items={data.moves.map(item => item.move.name)} />
    </section>
  );
};

export default Pokemon;
