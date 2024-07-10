"use client"
import React, { useEffect, useState } from 'react'

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState([null])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchUrl );
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
  }, [fetchUrl]);

  console.log(movies)
  return (
    <>
    <h2 className='font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
      <div id={'slider'}>
        {movies.map((items, id)=>(
          <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`} alt={items.title} />
          </div>
        ))}
      </div>

    </div>
      
    </>
  )
}

export default Row
