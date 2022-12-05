import React from "react";
import { getTVSeries } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVSeriesListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TVSeriesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvSeries', getTVSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvSeries = data.results;



  // Redundant, but necessary to avoid app crashing.
  const favourites = tvSeries.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (tvSeriesid) => true 

  return (
    <PageTemplate
      title="TV Series"
      tvSeries={tvSeries}
      action={(tvSeries) => {
        return <AddToFavouritesIcon tvSeries={tvSeries} />
      }}
    />
);
};
export default TVSeriesPage;