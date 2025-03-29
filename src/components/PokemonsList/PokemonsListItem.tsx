import { useNavigate } from 'react-router-dom';
import { PokemonType } from '../../lib/types';
import { ListItem, ListItemName } from './PokemonsList.styled';

type Props = {
  pokemon: PokemonType;
  ref?: React.Ref<HTMLLIElement> | null;
};

export const PokemonsListItem = ({ pokemon, ref }: Props) => {
  const { name } = pokemon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name}`, { replace: true });
  };

  return (
    <ListItem ref={ref} onClick={handleClick}>
      <ListItemName>{name}</ListItemName>
    </ListItem>
  );
};
