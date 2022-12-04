import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (actors) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actors.id)) {
      newFavourites.push(actors.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actors) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actors.id
    ) )
  };
  const addReview = (actors, review) => {
    setMyReviews( {...myReviews, [actors.id]: review } )
  };

  return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;