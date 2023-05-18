import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-5 h-[50px] bg-orangess text-white'>
        <Link to="/" className='font-bold italic text-3xl'>Store App</Link>
        <div className='flex gap-2 text-2xl'>
            <Link to="/" className='mr-2' >Home</Link>
            <Link to="/favorites" >Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar