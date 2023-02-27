import React from 'react'
import { 
    RiSearchLine,
    RiArrowDownSLine,
    RiNotification3Line,
    RiCheckboxBlankCircleFill
  } 
  from "react-icons/ri";

const Header = () => {
  return (
    <>
        {/* header */}
        <header className="flex flex-col md:flex-row gap-4 w-full items-center justify-between p-4 ">
          {/* search */}
          <form className="w-full lg:w-[30%]  md:w-[40%] order-1 md:order-none">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-3"/>
              <input type={Text} 
              className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full" 
              placeholder="Buscar" />
            </div>
          </form>
          {/* notifications */}
          <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="relative">
                  < RiNotification3Line className="text-xl"/>
                  <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
                </a>
              </li>
              <li >
                <a href="#" className="flex items-center gap-1">
                  Mario Begambre < RiArrowDownSLine/>
                </a>
              </li>
            </ul>
          </nav>
        </header>
       
        
      </>
  )
}

export default Header