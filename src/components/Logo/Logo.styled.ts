import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
  transition: all 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;
