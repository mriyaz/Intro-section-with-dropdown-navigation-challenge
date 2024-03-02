import React from 'react'

import downArrow from '../images/icon-arrow-down.svg';
import upArrow from '../images/icon-arrow-up.svg';

interface NavLink {
  label: string;
  href?: string;
  isSubOpen?: boolean;
  children?: NavLink[];
  img?: string;

}

interface DropDownProps {
  link: NavLink,
  toggleSubOpen: (label: string) => void,
}



const Dropdown: React.FC<DropDownProps> = ({ link, toggleSubOpen }) => {
  return (
    link.children ? (
      <div className='md:flex md:flex-col' onClick={() => toggleSubOpen(link.label)}>
        <div className="flex gap-2 hover:cursor-pointer mb-1 ">
          <h3>{link.label}</h3>
          {
            link.isSubOpen ?
              <button>
                <img src={upArrow} alt="up arrow" width='10px' />
              </button>
              :
              <button>
                <img src={downArrow} alt="down arrow" />
              </button >}
        </div>

        {link.isSubOpen && <ul className="space-y-2 pl-1 md:absolute md:top-12 md:pl-0 md:bg-gray-100 md:rounded-lg">
          {link.children.map((child) => (
            <li key={child.label} className='p-1'>
              <a href={child.href || '#'} className=" flex gap-4">
                {child.img && <img src={child.img} alt="img" width='25px' />}
                {child.label}
              </a>
            </li>
          ))}
        </ul>}

      </div>
    )

      :

      (
        <a href={link.href || '#'} >
          {link.label}
        </a>
      )

  )
}

export default Dropdown