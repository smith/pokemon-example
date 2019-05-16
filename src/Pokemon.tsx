import React, {
  FunctionComponent,
  Suspense,
  lazy,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import Loading from "./Loading";
import NotFound from "./NotFound";
import sampleData from "./squirtle.json";

const ToggleableList = lazy(() => import("./ToggleableList"));

export interface PokemonProps {
  name: string;
}

type ResponseData = typeof sampleData;

function usePokeApi(name: string) {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(response);
      if (response.ok) {
        setData(await response.json());
      } else {
        setData(undefined);
      }
    })();
  }, [name]);

  return data;
}

export const Pokemon: FunctionComponent<PokemonProps> = ({ name }) => {
  const [areAbilitiesHidden, setAreAbilitiesHidden] = useState(true);
  const toggleAbilities = useCallback(
    () => setAreAbilitiesHidden(prevState => !prevState),
    [setAreAbilitiesHidden]
  );

  const [areMovesHidden, setAreMovesHidden] = useState(true);
  const toggleMoves = useCallback(
    () => setAreMovesHidden(prevState => !prevState),
    [setAreMovesHidden]
  );

  const data = usePokeApi(name);

  const typeNames = useMemo(
    () => (data ? data.types.map(item => item.type.name).join(", ") : []),
    [data]
  );
  const abilityNames = useMemo(
    () => (data ? data.abilities.map(item => item.ability.name) : []),
    [data]
  );
  const moveNames = useMemo(
    () => (data ? data.moves.map(item => item.move.name) : []),
    [data]
  );

  if (!data) {
    return <NotFound name={name} />;
  }

  const { base_experience, height, sprites, weight } = data;

  const img = sprites.front_default;

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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
};

export default memo(Pokemon);
