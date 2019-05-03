import React, { FunctionComponent } from "react";

import NotFound from "./NotFound";
import ToggleableList from "./ToggleableList";
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

  const areAbilitiesHidden = false;
  const toggleAbilities = () => console.log("toggleAbilities");

  const areMovesHidden = false;
  const toggleMoves = () => console.log("toggleMoves");

  return (
    <div className="Pokemon">
      <h1>{name}</h1>
      <section>
        <img src={img} alt={name} />
        <ul>
          <li>Base experience: {base_experience}</li>
          <li>Height: {height}</li>
          <li>Weight: {weight}</li>
          <li>Type: {typeNames}</li>
        </ul>
      </section>
      <ToggleableList
        description="abilities"
        hidden={areAbilitiesHidden}
        items={abilityNames}
        onChange={toggleAbilities}
      />
      <ToggleableList
        description="moves"
        hidden={areMovesHidden}
        items={moveNames}
        onChange={toggleMoves}
      />
    </div>
  );
};

export default Pokemon;
