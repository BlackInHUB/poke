import { ChangeEvent, FormEvent } from 'react';
import { BtnWrapper, SearchInput, SearchForm } from './Search.styled';
import { Button } from '../Button';
import { IoSearch } from 'react-icons/io5';
import theme from '../../../utils/theme';

type Props = {
  value: string | number;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchSubmit: () => void;
};

export const Search = ({ value, placeholder, searchSubmit, handleChange }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchSubmit();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput type="text" value={value} placeholder={placeholder} onChange={handleChange} />
      <BtnWrapper>
        <Button
          type="submit"
          variant="icon"
          Icon={IoSearch}
          iconFill={theme.colors.medium}
          iconW="25px"
          iconH="25px"
        />
      </BtnWrapper>
    </SearchForm>
  );
};
