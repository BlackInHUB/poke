import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 95%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow.s};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media (min-width: 1600px) {
    width: 1440px;
  }
`;

export const OutletContainer = styled.main`
  margin-top: 88px;
  padding: 16px;
`;
