# Netflix-GPT

- Create React App
- Configure Tailwind: npm install -D tailwindcss@3.4.1 postcss autoprefixer (for node v-22 and npm v-11 only) ,npx tailwindcss init -p
- Header
- Routing
- Login Form
- Signup form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app to production
- Create signup user account in firebase
- Implement sign in user api
- Created redux store with userSlice
- Implemented Signout feature.
- Update profile api call
- Fetch from TMDB Movies.
- Bugfix: Signup user display and profile picture update. 
- Bugfix: If the user is not logged in Redirect /browse to Login page and vice-versa.
- Unsubscribed to the onAuthStateChanged call back
- Add hardcoded values to the constant file.
- Register TMDB API & create an app and get access token
- Get data from TMDB now playing movies list API
- Custom hook for Now playing movies
- create movie slice
- Update store with movies data
- Planning for Maincontainer and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the YouTube video and make it autoplay and mute
- Tailwind classes to make main container look awesome.
- Build Secondary Component
- Build movies list
- Build movies card
- TMDB image CDN URL
- Made the Browse page amazing with tailwind css
- usePopularMovies Custom hook


# Features
- Login/Signup page
    - Sign In/Sign up form
    - Redirect to Browse page
- Browse(after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie suggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions


# How to get movies API
- Go to tmdb(search in chrome for TMDB) and go to tmdbmovie.db.org
    - Login to that->go to edit profile->Go to API-> create api->register your app for personal -> give app name , url of host , you first name, contact no, address and give description of your app and click on subscribe->it will create api and access token for u.

# How Browse Page Looks.. What all features should be there..
- MainContainer
    - VideoBackground
    - VideoTitle
- SecondaryContainer
    - MoviesLIst * n
    - cards * n
    
# SecondaryContainer features
- MovieList - Popular
    MovieCards * n
- MovieList - Now Playing
- MovieList - Trending
- MovieList - Horror