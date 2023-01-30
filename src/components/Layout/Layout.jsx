import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkStyled, Navigation } from 'components/Layout/Layout.styled';


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
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    );
};