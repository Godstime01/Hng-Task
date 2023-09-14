# MOVIE DISCOVERY WEB APP

## Project description
 Create a movie discovery web application that allows users to search for movies, view details about them and save their about them, and save  their favourite movies. 

## Data source
[TMDB API]("")

## Requirements
    1. Create a responsive and visually appealing UI for the application.
        - display 10 movies on the homepage in grid layout
        - card component should display 
            - movie title
            - release date

```
    data-testid = movie-card
    data-testid = movie-poster
    data-testid = movie-title
    data-testid = movie-realease-date

```
    2. Movie search
        - implement a search feature that allows users to search for movies by title
        - display search result, including movie posters, titles, and release dates
        - show loading indicator while fetching search results
    
    3. Movie details
        - when user goes to movies/:id, user should see the movie details page

        title - [data-testid = movie-title]
        release date - [data-testid = movie-realease-date]
        runtime - [data-testid = movie-runtime]
        overview - [data-testid= movie-overview]

    4. Error handling
        - user should see meaningful error messages incase of API failure