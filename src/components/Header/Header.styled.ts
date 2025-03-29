import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.medium};
  box-shadow: ${({ theme }) => theme.shadow.s};
`;
