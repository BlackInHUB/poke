import { List } from './PokemonsList.styled';
import { PokemonsListItem } from './PokemonsListItem';
import { PokemonType } from '../../lib/types';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type Props = {
  pokemons: PokemonType[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PokemonsList = ({ pokemons, setPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1);
    }
  }, [inView, setPage]);

  return (
    pokemons.length > 0 && (
      <List>
        {pokemons.map((pokemon, i) => (
          <PokemonsListItem
            key={i}
            pokemon={pokemon}
            ref={i === pokemons.length - 1 ? ref : null}
          />
        ))}
      </List>
    )
  );
};
