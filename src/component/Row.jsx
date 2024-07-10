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
    <h2 className='font-bold md:text-xl p-4 text-white'>{title}</h2>
    <div className='relative flex items-center'>
      <div id={'slider'}>
        {movies.map((items, id)=>(
          <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`} alt={items.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{items?.title}</p>

            </div>
          </div>
        ))}
      </div>

    </div>
      
    </>
  )
}

export default Row
