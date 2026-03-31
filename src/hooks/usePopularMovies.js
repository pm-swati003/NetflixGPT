import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {

//Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const popularMovies = useSelector(state => state.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(()=>{
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;