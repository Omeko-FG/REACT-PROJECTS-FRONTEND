import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[50px] px-5 text-white bg-gray-500'  >
        <h3 className='font-bold'>Gurbuz Store</h3>
        <div className=''>
            <Link to="/" className='mr-3'>Home</Link>
            <Link to="/Favorites">Favorites</Link>
        </div>
    </div>
    
  )
}

export default Navbar