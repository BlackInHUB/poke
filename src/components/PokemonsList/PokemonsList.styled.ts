import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ListTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  text-align: center;
  line-height: 1;
  /* margin-bottom: 24px; */
`;

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

export const ToTopBtnWrapper = styled.div`
  width: fit-content;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 12;
`;
