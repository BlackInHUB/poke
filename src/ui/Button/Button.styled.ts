import styled from 'styled-components';

type BtnProps = {
  $variant: 'dark' | 'light';
  $fontSize?: string;
  $width: string;
};

export const Btn = styled.button<BtnProps>`
  width: ${props => (props.$width ? props.$width : '100%')};
  font-size: ${props => (props.$fontSize ? props.$fontSize : 'inherit')};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.m};
  background-color: ${({ theme }) => theme.colors.medium};
  color: ${({ theme }) => theme.colors.white};
  transition: all 150ms linear;
  cursor: pointer;

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  :focus-visible {
    box-shadow: ${({ theme }) => theme.shadow.s};
    transform: scale(1.01);
  }
`;
