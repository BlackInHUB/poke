import { List, ListContainer, ListTitle, ToTopBtnWrapper } from './PokemonsList.styled';
import { PokemonsListItem } from './PokemonsListItem';
import { PokemonType } from '../../lib/types';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Dropdown, DropItemType } from '../ui/Dropdown';
import { Button } from '../ui/Button';
import { FaArrowAltCircleUp } from 'react-icons/fa';

type Props = {
  pokemons: PokemonType[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  items: DropItemType[];
  selected: DropItemType;
  isOpen: boolean;
  onDropClick: () => void;
  onItemClick: (i: number) => void;
  onClose: () => void;
  page: number;
};

export const PokemonsList = ({
  pokemons,
  setPage,
  selected,
  onDropClick,
  onItemClick,
  onClose,
  isOpen,
  items,
  page,
}: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1);
    }

    const handleScrollPos = () => setScrollPos(window.pageYOffset);

    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  }, [inView, setPage]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    pokemons.length > 0 && (
      <ListContainer>
        <ListTitle>Pokemons list</ListTitle>
        <Dropdown
          selected={selected}
          onItemClick={onItemClick}
          onDropClick={onDropClick}
          onClose={onClose}
          isOpen={isOpen}
          items={items}
        />
        <List>
          {pokemons.map((pokemon, i) => (
            <PokemonsListItem
              key={i}
              pokemon={pokemon}
              ref={i === pokemons.length - 1 ? ref : null}
            />
          ))}
        </List>
        {page > 1 && scrollPos > 1200 && (
          <ToTopBtnWrapper>
            <Button handleClick={handleScrollToTop} Icon={FaArrowAltCircleUp} variant="dark">
              To top
            </Button>
          </ToTopBtnWrapper>
        )}
      </ListContainer>
    )
  );
};
