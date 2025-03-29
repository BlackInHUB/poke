import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.dark};
  width: 200px;
  padding: 10px;
  border: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.radii.s};
  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadow.s};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ListItemName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.m};

  &::first-letter {
    text-transform: uppercase;
  }
`;
