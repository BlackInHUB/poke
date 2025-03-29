import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokeService from '../services/pokeService';
import { AppContext } from '../context/appContext/appContext';
import { PokemonDetails } from '../components/PokemonDetails';
import { Button } from '../ui/Button';
import { RiArrowGoBackLine } from 'react-icons/ri';

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { setLoading, currentPokemon, setCurrentPokemon } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPokemon && currentPokemon.name === name) {
      return;
    }
    setLoading(true);
    pokeService
      .getPokeDetails(name as string)
      .then(response => setCurrentPokemon(response))
      .finally(() => setLoading(false));
  }, [name]);

  const handleGoBack = () => {
    setCurrentPokemon(null);
    navigate('/pokemons');
  };

  return (
    currentPokemon && (
      <>
        <PokemonDetails pokemon={currentPokemon} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            width="fit-content"
            handleClick={handleGoBack}
            Icon={RiArrowGoBackLine}
            iconLeft={true}
            variant="light"
          >
            Back to list
          </Button>
        </div>
      </>
    )
  );
};

export default PokemonDetailsPage;
