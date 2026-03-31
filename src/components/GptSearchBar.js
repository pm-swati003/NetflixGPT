import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2  bg-black grid grid-cols-12'>
            <input 
            className=' col-span-9 p-4 m-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500' 
            type='text' 
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button 
            className='bg-red-700 col-span-3 text-white px-6 mx-2 my-4 rounded-lg hover:bg-red-900 transition-colors duration-300' 
            type='submit'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar