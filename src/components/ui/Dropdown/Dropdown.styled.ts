import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 80px;
  position: relative;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.medium};
  border-radius: ${({ theme }) => theme.radii.s};
  cursor: pointer;
`;

export const SelectedWrapper = styled.div`
  text-align: center;
  /* display: flex;
  align-items: center;
  gap: 8px; */
`;

export const SelectedText = styled.span`
  text-align: center;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.colors.dark};
`;

export const DropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 10;
  width: 80px;
  max-height: ${props => (props.$isOpen ? '500px' : 0)};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.s};
  overflow: hidden;
  transition: max-height 150ms ease-in-out;
`;

export const DropdownListItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: hover 150ms linear;

  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.borders.thin} ${({ theme }) => theme.colors.medium};
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.medium};
  }
`;
