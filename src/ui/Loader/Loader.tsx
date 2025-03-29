import theme from '../../utils/theme';
import StyledIcon from '../StyledIcon/StyledIcon';
import { LoaderBackdrop, LoaderItem } from './Loader.styled';
// import { MdCatchingPokemon } from 'react-icons/md';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <LoaderItem>
        <StyledIcon
          Icon={MdOutlineCatchingPokemon}
          width="50px"
          height="50px"
          fill={theme.colors.dark}
        />
      </LoaderItem>
    </LoaderBackdrop>
  );
};

export default Loader;
