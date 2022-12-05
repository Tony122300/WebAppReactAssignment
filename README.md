# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: [Tony JinHui Liu]]

## Overview.

### New Pages.

+ Added an Upcoming Movies Page which shows movies coming out soon.
+ Added a Popular Movies Page which shows Movies that are currently popular or trendy.
+ Added a Top-Rated Movies Page which shows the highest rated movies ever.
+ addedd a actors page showing many actors
+ favourite actors page to add actors to favourites
+Added a login page for use with authentication to access private routes and login to it.
+ Added a sign up page which creates an account for you to login with.
-sign up

### New Features.

+ login and signup
+ three Icons for external link but not the right link or way for that page i want.
+

## Setup requirements.

npm start

## TMDB endpoints.

+ /movies/{movie_id}/reviews - The user reviews or a movie.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /person/popular - A list of popular actors.
+ /tv/{tv_id}/
+ https://api.themoviedb.org/3/movie/${id}/credits the cast of the movie
+ https://api.themoviedb.org/3/person/popular popular movie acterz
+ https://api.themoviedb.org/3/person/${id}?api get the cast
+ https://api.themoviedb.org/3/tv/popular popular tv series
+ https://api.themoviedb.org/3/tv/{tv_id}/images images for the tv series 
+ https://api.themoviedb.org/3/movie/upcoming upcoming movies
+ https://api.themoviedb.org/3/movie/popular popular movies
+ https://api.themoviedb.org/3/movie/top_rated to get the top rated movies

## App Design.

### Component catalogue.

[ Insert a screenshot from the Storybook UI, and highlight the stories that relate to your __new/modified components__ - see the example screenshot below.] .......

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

e.g.

Home Page
![](./images/1.png)

Favourite Movies
![ ](./images/2.png)

Reviews
![ ](./images/12.png)


Writing a review
![ ](./images/3.png)

Movie Details
![ ](./images/4.png)

Upcoming Movies
![ ](./images/5.png)

Popular Movies
![ ](./images/6.png)


Top rated Movies
![ ](./images/7.png)

Actors Page
![ ](./images/12.png)


Actors Details
![ ](./images/8.png)

TV Series
![ ](./images/9.png)

Signup Page
![ ](./images/10.png)

Login Page
![ ](./images/11.png)

>Shows the full review for a movie.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

e.g. 

+ Route path="/login" 
+ Route path="/signup" element={<SignUpPage/>} />
+ <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
+ <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
+ <Route  exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
+ <PrivateRoute  exact path="/movies/favourites" element={<FavouriteMoviesPage />} /> */}
+ <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
+  <Route exact path="/movies/popular" element={<PopularMovies/>} />
+ <Route exact path="/movies/socials" element={<movieDetailsPage/>} />
+ <Route exact path="/movies/toprated" element={<TopMoviesPage/>} />
+ <Route exact path="/actors" element={<MovieActorsPage/>}/>
+ <Route  exact path="/actors/favourites" element={<FavouriteActorsPage />} />
+ <Route path="/movies/:id" element={<MoviePage />} />
+ <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
+ <Route path="/tvSeries" element={<TVSeriesPage />} />
+ <Route path="/tvSeries/:id" element={<TVSeriesDetailsPage />} />
+ <Route path="/" element={<HomePage />} />
+ <Route path="*" element={ <Navigate to="/" /> } />

[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).
