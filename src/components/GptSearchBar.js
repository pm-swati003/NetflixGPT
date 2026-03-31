import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {

    const dispatch = useDispatch();

    //Search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+
            movie+
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;

    }; 
    const handleGPTSearchClick = async () => {
        //Implement GPT Search Logic here
        try {
        console.log(searchText.current.value);

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value+".only give me names of 5 movies, comma separated like the example result given ahead. Example result: Godar, Sholay, Don, Koi Mil Gaya, Golmal";
        //Make an API call to  GPT API and  get movies results
        const getResults  = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents : gptQuery,
        });
        const gptMovies =
      getResults?.candidates?.[0]?.content?.parts?.[0]?.text.split(",");

       if (!gptMovies) {
      throw new Error("No response from AI");
    }

    console.log(gptMovies);
    // For each movie I will search TMDB
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // Array of promises -> I will wait for all promises to resolve
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
  
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));


    } catch (error) {
    console.error("Error occurred:", error.message);

    // ✅ fallback (important for UI)
    const fallback =
      "Inception, Interstellar, Avatar, Titanic, The Dark Knight";

    console.log("Fallback movies:", fallback);
  }

    };
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
  return (
    <div className='pt-[48%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input
            ref={searchText} 
            className=' col-span-9 p-4 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500' 
            type='text' 
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button 
            className='bg-red-700 col-span-3 text-white px-6 mx-2 my-4 rounded-lg hover:bg-red-900 transition-colors duration-300' 
            type='submit'
            onClick={handleGPTSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar