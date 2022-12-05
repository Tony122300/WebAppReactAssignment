import React from "react";
import { useParams } from 'react-router-dom';
//import MovieActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateMovieActorsPage";
// import useMovie from "../hooks/useMovie";
import { getTVSeriesDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import TVSeriesDetails from "../components/tvSeriesDetails";


const TVSeriesDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tvSeries, error, isLoading, isError } = useQuery(
    ["tvSeries", { id: id }],
    getTVSeriesDetails
  );

  //console.log(actors)
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvSeries ? (
        <>
          <PageTemplate tvSeries={tvSeries}>
            <TVSeriesDetails tvSeries={tvSeries} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Series details</p>
      )}
    </>
  );
};

export default TVSeriesDetailsPage;