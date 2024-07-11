"use client"
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'


function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState([null])
  const [like, setLike] = useState(false)

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
      <MdChevronLeft size={30} className='bg-gray-400 rounded-full' />
      <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'> 
        {movies.map((items, id)=>(
          <Movie key={id} items={items} />
        ))}
      </div>
      <MdChevronRight size={30} className='bg-gray-400 rounded-full' />

    </div>
      
    </>
  )
}

export default Row
