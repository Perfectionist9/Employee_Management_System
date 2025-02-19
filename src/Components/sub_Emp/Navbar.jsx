import React, { useState } from 'react'

const Navbar = ({data}) => {


  return (
    <div className='flex items-center justify-between ' >
        <h1 className='text-2xl font-medium'>HELLO <br /> <span className='text-3xl font-semibold'> {data.firstName} 🙋‍♂️ </span></h1>
        <button className='bg-red-500 rounded py-2 px-3 text-lg font-medium '>Log out</button>
    </div>
  )
}

export default Navbar
