import { Dispatch, SetStateAction, createContext } from 'react';
import { PokemonDetailsType, PokemonType } from '../../lib/types';

type ContextProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  pokemonsData: { pokemons: PokemonType[]; count: number };
  setPokemonsData: Dispatch<SetStateAction<{ pokemons: PokemonType[]; count: number }>>;
  currentPokemon: PokemonDetailsType | null;
  setCurrentPokemon: Dispatch<SetStateAction<PokemonDetailsType | null>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<ContextProps>({
  loading: false,
  setLoading: () => {},
  pokemonsData: { pokemons: [], count: 0 },
  setPokemonsData: () => {},
  currentPokemon: null,
  setCurrentPokemon: () => {},
  page: 0,
  setPage: () => {},
});
