import styled from 'styled-components';

type Props = {
  $width?: string;
  $height?: string;
  $fill?: string;
};

export const IconComponent = styled.svg<Props>`
  width: ${props => (props.$width ? props.$width : 'auto')};
  height: ${props => (props.$height ? props.$height : 'auto')};
  fill: ${props => (props.$fill ? props.$fill : props.theme.colors.dark)};
  stroke: ${props => (props.$fill ? props.$fill : 'inherit')};
  transition: all 150ms linear;
`;
