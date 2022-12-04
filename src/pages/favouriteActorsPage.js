import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getMovieActors } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteActorsPage = () => {
  const {favourites: actorIds } = useContext(ActorsContext);

  // Create an array of queries and run in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getMovieActors,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite actors"
      actors={actors}
      selectFavourite={toDo}
      action={(actor) => {
        return (
            <>
              <RemoveFromFavourites actor={actor} />
              <WriteReview actor={actor} />
            </>
          );
        }}
    />
  );
};

export default FavouriteActorsPage;