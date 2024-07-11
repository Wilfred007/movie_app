import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-2xl font-bold cursor-pointer'>WiFlix</h1>
      <div>
        <button className='text-red-600 pr-4'>Sign In</button>
        <button className='bg-red-600 px-5 py-1 rounded cursor-pointer text-white'>Sign Up </button>
      </div>
    </div>
  )
}

export default Navbar
