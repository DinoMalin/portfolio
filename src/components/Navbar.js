import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='sticky top-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-8'>
        <NavLink to='/'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-gray-900'>
            Ju'
          </span>
        </NavLink>
        <div>
          <ul className=' p-0 flex flex-row space-x-8 mt-0'>
            <li>
              <NavLink
                to='/portfolio'
                className='py-2 pl-3 pr-4 text-gray-900 hover:text-green-700'
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className='py-2 pl-3 pr-4 text-gray-900 hover:text-green-700'
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className='h-px bg-gray-300 border-0 mx-8 mb-1' />
    </nav>
  );
};

export default Navbar;
