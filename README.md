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
![1](https://user-images.githubusercontent.com/59939389/205658371-24d115db-bab2-49d3-8ce2-a64f385be6e9.png)

Favourite Movies
![2](https://user-images.githubusercontent.com/59939389/205658424-67bceb8f-005c-41f8-874b-091b4954211b.png)

Reviews
![image](https://user-images.githubusercontent.com/59939389/205658851-20ab93ea-c7f5-4009-b023-14feb8e6e0ca.png)


Writing a review
![3](https://user-images.githubusercontent.com/59939389/205658456-cc08c040-bf65-49dd-b279-1401d786b59b.png)

Movie Details
![4](https://user-images.githubusercontent.com/59939389/205658502-6cf31839-4325-4700-b893-5e2e29bb3b16.png)

Upcoming Movies
![5](https://user-images.githubusercontent.com/59939389/205658527-0ff82fed-ec65-4850-b054-cb6a94d968da.png)

Popular Movies
![6](https://user-images.githubusercontent.com/59939389/205658567-fa741d93-faa6-40a6-a1e7-4f168e4e7e0b.png)


Top rated Movies
![7](https://user-images.githubusercontent.com/59939389/205658613-3e7f1c00-0735-492b-a679-9f41f531851b.png)

Actors Page
![12](https://user-images.githubusercontent.com/59939389/205659151-82803976-0416-4c3b-90f8-f1f0dce751bf.png)


Actors Details
![8](https://user-images.githubusercontent.com/59939389/205658663-8132ebb0-e7b6-4262-ac2b-c0845e4bbfc1.png)

TV Series
![9](https://user-images.githubusercontent.com/59939389/205658707-2f5e8eb5-9fb1-430b-99d6-90e344b7c2fe.png)

Signup Page
![10](https://user-images.githubusercontent.com/59939389/205658737-aaf6b637-b47d-4e71-bf6a-311c346164ab.png)

Login Page
![11](https://user-images.githubusercontent.com/59939389/205658768-b92cb71b-7fb9-43a6-b72e-f71d8c9f22e6.png)

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
