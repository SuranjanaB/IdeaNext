import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-950 text-white h-16 w-full flex flex-row gap-4 pt-5 justify-center font-bold'>
      <NavLink
       to="/"
       className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-semibold text-xl"
          : "text-white font-medium text-xl"
      }>
        Home
      </NavLink>
      <NavLink to="/notes"
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-semibold text-xl"
          : "text-white font-medium text-xl"
      }>
        Notes
      </NavLink>
    </div>
  )
}

export default Navbar
