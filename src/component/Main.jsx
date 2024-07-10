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
  
  
  return (
    <div className='w-full h-[550px] text-red-950'>
      <div className='w-full h-full top-0'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div>
          <button className='border text-black bg-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white bg-black py-2 px-5'>Watch Later</button>
        </div>

      </div>
    
    </div>
  )
}

export default Main
