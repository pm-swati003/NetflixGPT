import React from 'react'
import { Play, Info } from "lucide-react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview }</p>
        <div className='flex gap-10'>
            <button className='bg-white text-black p-4 px-5 text-xl flex items-center rounded-lg hover:bg-opacity-80'><Play/> Play</button>
            <button className='mx-2 bg-gray-300 text-black p-4 px-5 text-xl flex  items-center bg-opacity-80 rounded-lg hover:bg-opacity-100'><Info/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle