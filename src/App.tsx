import { Route, Routes } from 'react-router-dom';
import { DETAILS_ROUTE, HOME_ROUTE, POKEMONS_ROUTE } from './lib/routes';

import { MainLayout } from './components/MainLayout';
import { lazy, Suspense, useState } from 'react';
import { PokemonDetailsType, PokemonType } from './lib/types';
import Loader from './ui/Loader/Loader';
import { Bounce, ToastContainer } from 'react-toastify';
import { AppContext } from './context/appContext/appContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const PokemonsPage = lazy(() => import('./pages/PokemonsPage'));
const PokemonDetailsPage = lazy(() => import('./pages/PokemonDetailsPage'));

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonsData, setPokemonsData] = useState<{ pokemons: PokemonType[]; count: number }>({
    pokemons: [],
    count: 0,
  });
  const [currentPokemon, setCurrentPokemon] = useState<PokemonDetailsType | null>(null);
  const [page, setPage] = useState(1);

  return (
    <>
      {loading && <Loader />}

      <ToastContainer
        position="bottom-right"
        stacked
        transition={Bounce}
        theme={'colored'}
        newestOnTop
      />
      <AppContext.Provider
        value={{
          loading,
          setLoading,
          pokemonsData,
          setPokemonsData,
          currentPokemon,
          setCurrentPokemon,
          page,
          setPage,
        }}
      >
        <Suspense fallback={null}>
          <Routes>
            <Route path={HOME_ROUTE} element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={POKEMONS_ROUTE} element={<PokemonsPage />} />
              <Route path={DETAILS_ROUTE} element={<PokemonDetailsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AppContext.Provider>
    </>
  );
}

export default App;
