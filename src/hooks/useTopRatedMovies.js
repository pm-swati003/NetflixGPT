import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {

//Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;