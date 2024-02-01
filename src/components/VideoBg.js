import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBg = ({movieId}) => {

    const getMoviesVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/572802/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json);


    }

    useEffect(() => {
        getMoviesVideo()
    },[])
      return (
    <div>
         
    </div>
  )
}

export default VideoBg