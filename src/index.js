import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ActorContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import PopularMovies from "./pages/popularMovies";
import TopMoviesPage from "./pages/topMoviesPage";
import MovieActorsPage from "./pages/actorPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import MovieActorDetailsPage from "./pages/actorDetailsPage";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute/index";
import AuthHeader from "./components/authHeader/index";
import SignUpPage from "./pages/signUpPage";
import TVSeriesPage from "./pages/tvSeriesPage";
import TVSeriesDetailsPage from "./components/tvSeriesDetails";
import TVSeriesContextProvider from "./contexts/tvSeriesContext";
import { Switch } from "@mui/material";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
         <AuthProvider>
          <AuthHeader /> 
            <SiteHeader />
            <MoviesContextProvider><ActorContextProvider><TVSeriesContextProvider>
            <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route  exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
          <Route exact path="/movies/popular" element={<PopularMovies/>} />
          <Route exact path="/movies/toprated" element={<TopMoviesPage/>} />
          <Route exact path="/actors" element={<MovieActorsPage/>}/>
          <Route  exact path="/actors/favourites" element={<FavouriteActorsPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
          <Route path="/tvSeries" element={<TVSeriesPage />} />
          <Route path="/tvSeries/:id" element={<TVSeriesDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </TVSeriesContextProvider>
        </ActorContextProvider>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
  };
  
  const rootElement = createRoot( document.getElementById("root") )
  rootElement.render(<App /> );