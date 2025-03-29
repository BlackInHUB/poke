import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  /* left: 0;
  right: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.medium};
  box-shadow: ${({ theme }) => theme.shadow.s};
`;
