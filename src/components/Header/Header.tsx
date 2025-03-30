import { ChangeEvent } from 'react';
import { Search } from '../ui/Search';
import { Logo } from '../Logo';
import { HeaderContainer } from './Header.styled';

type Props = {
  searchQuery: string | number;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: () => void;
};

export const Header = ({ searchQuery, handleSearchSubmit, handleSearchChange }: Props) => {
  return (
    <HeaderContainer>
      <Logo />
      <Search
        searchSubmit={handleSearchSubmit}
        placeholder="Search by name"
        value={searchQuery}
        handleChange={handleSearchChange}
      />
    </HeaderContainer>
  );
};
