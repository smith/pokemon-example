import React, { FunctionComponent } from "react";

import List from "./List";
import NotFound from "./NotFound";
import data from "./squirtle.json";

export interface PokemonProps {
  name: string;
}

export const Pokemon: FunctionComponent<PokemonProps> = ({ name }) => {
  const {
    abilities,
    base_experience,
    height,
    moves,
    sprites,
    types,
    weight
  } = data;

  if (!data) {
    return <NotFound name={name} />;
  }

  const img = sprites.front_default;
  const typeNames = types.map(item => item.type.name).join(", ");
  const abilityNames = abilities.map(item => item.ability.name);
  const moveNames = moves.map(item => item.move.name);

  const areAbilitiesShowing = true;
  const toggleAbilities = () => console.log("toggleAbilities");

  const areMovesShowing = true;
  const toggleMoves = () => console.log("toggleMoves");

  return (
    <div className="Pokemon">
      <h1>{name}</h1>
      <section>
        <img src={img} alt={name} />
      </section>
      <section>
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
              <td>{typeNames}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <button onClick={toggleAbilities}>
          {areAbilitiesShowing ? "Hide abilities" : "Show abilities"}
        </button>
        <List items={abilityNames} />
      </section>
      <section>
        <button onClick={toggleMoves}>
          {areMovesShowing ? "Hide moves" : "Show moves"}
        </button>
        <List items={moveNames} />
      </section>
    </div>
  );
};

export default Pokemon;
