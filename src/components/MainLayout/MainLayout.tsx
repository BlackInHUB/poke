import { ChangeEvent, Suspense, useContext, useState } from 'react';
import { LayoutContainer, OutletContainer } from './MainLayout.styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import pokeService from '../../services/pokeService';
import { AppContext } from '../../context/appContext/appContext';
import { toast } from 'react-toastify';

export const MainLayout = () => {
  const { setLoading, setCurrentPokemon } = useContext(AppContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    const pokemonName = searchQuery.toLowerCase().trim();

    setLoading(true);
    pokeService
      .getPokeDetails(pokemonName)
      .then(response => {
        if (!response) {
          return toast.error(`No pokemons found with name "${searchQuery}", try another name`);
        } else {
          setCurrentPokemon(response);
          navigate(`/details/${pokemonName}`);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <LayoutContainer>
      <Header
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <OutletContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </LayoutContainer>
  );
};
