import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggetion = () => {
    const {movieNames, movieResults} = useSelector(store => store.gpt);

    if(!movieNames || !movieResults){
        return null; // or a loading indicator
    };
    
  return (
    <div className='p-4 m-4 bg-black opacity-90'>
        <div>
            {movieNames.map((movieName,index) => (
                <MovieList 
                key={movieName} 
                title={movieName} 
                movies={movieResults[index]}
                /> 
                ))};
         </div>
    </div>
  )
} 

export default GptMovieSuggetion