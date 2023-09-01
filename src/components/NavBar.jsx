import { useState } from 'react'
import close from '../assets/close.svg';

import menu from '../assets/menu.svg';
import { navLinks} from '../constants/constans'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <h1 className='text-3xl font-bold font-poppins'>Film Connect</h1>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) =>(
          <li
           key ={nav.id}
           className= {`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
         <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev) } 
          />

          <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav,index) =>(
              <li
              key = {nav.id}
              className= {`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-2'}`}
              >
                <a href={`#${nav.id}`}> 
                  {nav.title}
                </a>
              </li>
            ))};
            </ul>
          </div>
      </div>


    </nav>

  )
}

export default NavBar