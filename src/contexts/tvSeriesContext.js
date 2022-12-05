import React, { useState } from "react";

export const TVSeriesContext = React.createContext(null);

const TVSeriesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (tvSeries) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tvSeries.id)) {
      newFavourites.push(tvSeries.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tvSeries) => {
    setFavourites( favourites.filter(
      (mId) => mId !== tvSeries.id
    ) )
  };
  const addReview = (tvSeries, review) => {
    setMyReviews( {...myReviews, [tvSeries.id]: review } )
  };

  return (
    <TVSeriesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TVSeriesContext.Provider>
  );
};

export default TVSeriesContextProvider;