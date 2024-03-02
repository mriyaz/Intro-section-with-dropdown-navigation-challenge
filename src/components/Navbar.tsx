import React, { useState } from 'react';
import logo from '../images/logo.svg';
import mobileMenuIcon from '../images/icon-menu.svg';
import mobileMenuClose from '../images/icon-close-menu.svg';

import todoImg from '../images/icon-todo.svg';
import calendarImg from '../images/icon-calendar.svg';
import reminderImg from '../images/icon-reminders.svg';
import planningImg from '../images/icon-planning.svg';
import Dropdown from './Dropdown';


interface NavLink {
  label: string;
  href?: string;
  isSubOpen?: boolean;
  children?: NavLink[];
  img?: string;

}



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [parentOpacity, setParentOpacity] = useState('opacity-0')
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    {
      label: 'Features',
      isSubOpen: false,
      children:
        [{ label: 'Todo List', img: todoImg },
        { label: 'Calendar', img: calendarImg },
        { label: 'Reminders', img: reminderImg },
        { label: 'Planning', img: planningImg }]
    },
    { label: 'Company', isSubOpen: false, children: [{ label: 'History' }, { label: 'Our Team' }, { label: 'Blog' }] },
    { label: 'Careers' },
    { label: 'About' }]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // setParentOpacity('opacity-75');
  }

  const toggleSubOpen = (label: string) => {
    return setNavLinks(prevArray =>
      prevArray.map(obj => (obj.label === label ? { ...obj, isSubOpen: !obj.isSubOpen } : obj)));
  }

  return (

    <header className="flex justify-between py-4 text-medium-gray hover:text-almost-black text-sm md:pt-5">

      <div className="md:hidden">
        {/* Logo */}
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-10 justify-center items-center">
        <img src={logo} alt="logo" />
        <div className='md:flex gap-5 justify-center items-center'>
          {navLinks.map((link) => (
            <Dropdown link={link} toggleSubOpen={toggleSubOpen} />
          ))}
        </div>
      </nav>

      {/* Desktop Menu remaining buttons*/}
      <div className='hidden md:flex gap-5 justify-center items-center'>
        {/* Display login and register buttons */}
        <a href='#'>Login</a>
        <a href='#' className='border-2 border-black rounded-xl flex justify-center items-center px-4 py-1'>Register</a>
      </div>


      {/* Mobile Menu */}
      <div className="md:hidden">
        {!isOpen ? <img src={mobileMenuIcon} alt="Menu Icon" onClick={toggleMenu} className='hover:cursor-pointer' /> :

          <nav className="absolute top-0 right-0 w-1/2 h-full p-4 bg-gray-200 z-20 overflow-auto shadow">

            {/* Show the close button */}
            <div className="flex justify-end ">
              <img src={mobileMenuClose} alt="Menu Open Icon" onClick={toggleMenu} className='hover:cursor-pointer' />
            </div>

            {/* Display the mobile menu in a column */}
            <div className="flex flex-col text-medium-gray hover:text-almost-black text-sm ">

              {navLinks.map((link) => (
                <div key={link.label} className="mb-4 text-sm">
                  <Dropdown link={link} toggleSubOpen={toggleSubOpen} />
                </div>
              ))}


              {/* Display login and register buttons */}
              <button className='my-2 mt-10'>Login</button>
              <button className='w-full border-2 border-black rounded-xl py-2 my-2'>Register</button>

            </div>

          </nav>
        }
      </div>

    </header>

  );
}

export default Navbar
