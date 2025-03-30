import { useContext, useEffect, useState } from 'react';
import { PokemonsList } from '../components/PokemonsList';
import { AppContext } from '../context/appContext/appContext';
import pokeService from '../services/pokeService';
import { DropItemType } from '../components/ui/Dropdown';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { PokemonType } from '../lib/types';

const sortQueries: DropItemType[] = [
  { text: 'A-z', query: 'A-z' },
  { text: 'Z-a', query: 'Z-a' },
];

const PokemonsPage = () => {
  const { setLoading, pokemonsData, setPokemonsData, page, setPage } = useContext(AppContext);
  const { count, pokemons } = pokemonsData;
  const limit = 100;
  const [dropOpen, setDropOpen] = useState(false);
  const [sortQuery, setSortQuery] = useState<DropItemType>({ text: '', query: null });

  useScrollPosition();

  const compareNames = (a: PokemonType, b: PokemonType) =>
    sortQuery.query === 'A-z' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);

  useEffect(() => {
    if (
      (pokemons.length > 0 && page * limit > count) ||
      (pokemons.length > 0 && page === 1) ||
      pokemons.length / limit === page
    ) {
      return;
    }

    const offset = pokemons.length > 0 ? (page - 1) * limit : 0;

    setLoading(true);
    pokeService
      .getAllPoke(offset, limit)
      .then(response => {
        if (response && response.results.length) {
          setPokemonsData(prev => {
            return {
              pokemons: [...prev.pokemons, ...response.results],
              count: response.count,
            };
          });
        }
      })
      .finally(() => setLoading(false));
  }, [page]);

  const toggleDrop = () => {
    setDropOpen(prev => !prev);
  };

  const handleSortSelect = (i: number) => {
    setSortQuery(sortQueries[i]);

    setPokemonsData(prev => {
      return {
        ...prev,
        pokemons: prev.pokemons.sort(compareNames),
      };
    });
  };

  return (
    <PokemonsList
      items={sortQueries}
      onDropClick={toggleDrop}
      onItemClick={handleSortSelect}
      isOpen={dropOpen}
      onClose={() => setDropOpen(false)}
      selected={sortQuery}
      setPage={setPage}
      pokemons={pokemons}
      page={page}
    />
  );
};

export default PokemonsPage;
