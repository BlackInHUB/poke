import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
0% { transform: rotate(0deg)}
100% {transform: rotate(360deg)}
`;

export const LoaderBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.back};
  z-index: 111;
`;

export const LoaderItem = styled.div`
  animation-name: ${rotation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
