import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';

// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notificationParams } from '../settings/settings';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        theme="colored"
        autoClose={notificationParams.autoClose}
      />
    </>
  );
};
