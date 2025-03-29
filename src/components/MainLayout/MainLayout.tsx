import { Suspense } from 'react';
import { LayoutContainer, OutletContainer } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </LayoutContainer>
  );
};
