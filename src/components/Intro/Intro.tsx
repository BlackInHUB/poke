import { IntroContainer, IntroImage } from './Intro.styled';
import PokemonImage from '../../assets/images/poke_logo.png';
import { Button } from '../../ui/Button';
import { FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroImage src={PokemonImage} alt="Intro image" />
      <NavLink to="pokemons">
        <Button Icon={FaPlay} variant="dark" fontSize="28px">
          Get started
        </Button>
      </NavLink>
    </IntroContainer>
  );
};
