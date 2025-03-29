import { HOME_ROUTE } from '../../lib/routes';
import { LogoImage, LogoLink } from './Logo.styled';
import PokeLogo from '../../assets/images/poke_logo.png';

export const Logo = () => {
  return (
    <LogoLink to={HOME_ROUTE}>
      <LogoImage src={PokeLogo} alt="Pokemons logo" />
    </LogoLink>
  );
};
