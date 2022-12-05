import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TVSeriesDetails = ({ tvSeries }) => {  // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvSeries.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        {/* <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {tvSeries.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))} */}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip label={`${tvSeries.popularity} min.`} />
        <Chip
          icon={<AccessTimeIcon />}
          label={`${tvSeries.first_air_date}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${tvSeries.vote_count}`}
        />
        <Chip label={`Released: ${tvSeries.original_language}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="origin Countries" sx={chip} color="primary" />
        </li>
        {tvSeries.origin_country.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* <MovieReviews tvSeries={tvSeries} /> */}
      </Drawer>
    </>
  );
};

export default  TVSeriesDetails ;