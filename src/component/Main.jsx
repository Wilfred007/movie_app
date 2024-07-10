"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '@/Request'


const Main = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null);


  const movie = movies[Math.floor(Math.random() * movies.length)]


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(requests.requestPopular);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, []);

  console.log(movies);

  const trunText = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }
  
  
  return (
    <div className='w-full h-[550px] text-red-950'>
      <div className='w-full h-full top-0'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl text-white font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border text-black bg-gray-300 py-1 px-5'>Play</button>
          <button className='border text-white py-1 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm'>{trunText(movie?.overview, 150)}</p>
        </div> 
      </div>
    
    </div>
  )
}

export default Main
