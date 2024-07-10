"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '@/Request'


const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) =>{
      setMovies(response.data.results)
    })
  }, [])
  console.log(movie)
  
  
  return (
    <div className='w-full h-[550px] text-red-950'>
      <div className='w-full h-full top-0'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div>
          <button>Play</button>
          <button>Watch Later</button>
        </div>

      </div>
    
    </div>
  )
}

export default Main
