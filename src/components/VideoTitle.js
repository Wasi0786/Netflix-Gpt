import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-5xl w-1/2 font-bold '>{title}</h1>
        <p className='py-6 text w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-white text-xl p-3 px-10 bg-opacity-40 rounded-lg mr-2'> ▶️ Play</button>
            <button className='bg-gray-500 text-white text-xl p-3 px-10 bg-opacity-40 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle