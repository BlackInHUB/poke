import { useContext, useEffect } from 'react';
import { PokemonsList } from '../components/PokemonsList';
import { AppContext } from '../context/appContext/appContext';
import pokeService from '../services/pokeService';

const PokemonsPage = () => {
  const { setLoading, pokemonsData, setPokemonsData, page, setPage } = useContext(AppContext);
  const { count, pokemons } = pokemonsData;
  const limit = 100;

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
            return { pokemons: [...prev.pokemons, ...response.results], count: response.count };
          });
        }
      })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    const position = localStorage.getItem('position');

    if (position) {
      window.scrollTo({
        top: +position,
      });
    }
  }, []);

  useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.pageYOffset;
      localStorage.setItem('position', JSON.stringify(position));
    };

    window.addEventListener('scroll', handleScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return <PokemonsList setPage={setPage} pokemons={pokemons} />;
};

export default PokemonsPage;
