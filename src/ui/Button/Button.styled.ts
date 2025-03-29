import styled from 'styled-components';

type BtnProps = {
  $variant: 'dark' | 'light' | 'icon';
  $fontSize?: string;
  $width: string;
  $iconFill?: string;
};

export const Btn = styled.button<BtnProps>`
  width: ${props => (props.$width ? props.$width : '100%')};
  font-size: ${props => (props.$fontSize ? props.$fontSize : 'inherit')};
  font-weight: ${({ theme }) => theme.fontWeights.m};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${props => (props.$variant === 'icon' ? '5px' : '16px')};
  border-radius: ${({ theme }) => theme.radii.m};
  background-color: ${props =>
    props.$variant === 'icon' ? 'transparent' : props.theme.colors.medium};
  color: ${({ theme }) => theme.colors.white};
  transition: all 150ms linear;
  cursor: pointer;

  & > svg {
    fill: ${props => (props.$iconFill ? props.$iconFill : props.theme.colors.white)};
  }

  &:hover,
  :focus-visible {
    box-shadow: ${props => (props.$variant === 'icon' ? null : props.theme.shadow.s)};
    transform: scale(1.01);
  }
`;
