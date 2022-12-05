import React, { useState } from "react";
import Header from "../tvSeriesHeader";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import TVSeriesList from "../tvSeriesList";

function TVSeriesListPageTemplate({ tvSeries, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedTVSeries = tvSeries
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    console.log(displayedTVSeries)
    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
    };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
         onUserInput={handleChange}
         titleFilter={nameFilter}
          />
        </Grid>
        <TVSeriesList action={action} tvSeries={displayedTVSeries}></TVSeriesList>
      </Grid>
    </Grid>
  );
}
export default TVSeriesListPageTemplate;