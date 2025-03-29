import styled from 'styled-components';

export const SearchForm = styled.form`
  position: relative;
  width: fit-content;

  &:hover,
  :focus {
    input {
      border-color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

export const SearchInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.h6};
  width: 400px;
  color: inherit;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.m};
  border: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.colors.medium};
  transition: all 150ms linear;

  &::placeholder {
    font-family: inherit;
    color: grey;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  right: 5px;
  z-index: 10;

  &:hover,
  :focus {
    svg {
      fill: ${({ theme }) => theme.colors.dark};
    }
  }
`;
