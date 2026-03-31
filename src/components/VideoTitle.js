import React from 'react'
import { Play, Info } from "lucide-react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview }</p>
        <div className='flex gap-10 my-2 md:my-0'>
            <button className='bg-white  text-black py-1 md:p-4 md:py-4 px-5 md:px-8 text-xl flex md:flex items-center rounded-lg hover:bg-opacity-80'><Play/> Play</button>
            <button className='hidden md:mx-2 md:bg-gray-300 md:text-black md:p-4 md:px-5 md:text-xl md:flex md:items-center md:bg-opacity-80 md:rounded-lg md:hover:bg-opacity-100'><Info/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle