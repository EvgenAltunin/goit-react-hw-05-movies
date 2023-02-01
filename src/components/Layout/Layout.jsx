import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkStyled, Navigation } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </Navigation>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
