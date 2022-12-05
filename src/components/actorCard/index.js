import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
 import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import { ActorsContext } from "../../contexts/actorsContext";
import WorkIcon from '@mui/icons-material/Work';

export default function MovieActorCard({ actors, action }) {
  const { favourites, addToFavourites } = useContext(ActorsContext);
 //  var favourites = []
     if (favourites.find((id) => id === actors.id)) {
        actors.favourite = true;
     } else {
        actors.favourite = false
     }
   
     const handleAddToFavourite = (e) => {
       e.preventDefault();
       addToFavourites(actors);
     };
     
// export default function MovieActorCard(props){
//     const actors = props.actors;
  
//     const handleAddToFavourite = (e) => {
//       e.preventDefault();
//       props.selectFavourite(actors.id);
//     };
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      avatar={
        actors.favourite ? (
          <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
      <Grid container>
          <Grid item xs={6}>
          <Typography variant="h6" component="p">
              <WorkIcon fontSize="small" />
              {actors.known_for_department}
              </Typography>
              <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actors.popularity}{" "}
            </Typography>
              </Grid>
              </Grid>
              </CardContent>
      <CardActions disableSpacing>
    {action(actors)}
        <Link to={`/actors/${actors.id}`}>
        <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
