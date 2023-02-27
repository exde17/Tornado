import React, {useState} from "react";
import { RiDashboardLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiBarChartHorizontalLine,
  RiCloseLine,
  RiNotification3Line,
  RiCheckboxBlankCircleFill
} 
from "react-icons/ri";



function App() {
  const [ sidebar, setSidebar ]= useState(false)

  const handleSidebar= () =>{
    setSidebar(!sidebar)
  }
  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-5 ">
      {/* sidebar */}
      <div className={`fixed lg:static w-[70%] md:w-[50%] lg:w-full top-0 z-50 bg-white transtion-all ${ sidebar ? "-left-0" :  "-left-full" }
       w-full h-full hoverflow-y-scroll col-span-1 p-8 border-r`}>
          {/* logo */}
          <div className='text-center p-8'>
               <h1 className='uppercase font-bold tracking-[4px]'>logo</h1>
          </div>
          <div className="flex flex-col justify-between h-[600px]">
            {/* menu */}
            <nav>
              <ul>
                <li>
                  <a href='h' className='flex items-center gap-2 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                    <RiDashboardLine/>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href='h' className='flex items-center gap-2 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                    <RiDashboardLine/>
                    Ejemplo1
                  </a>
                </li>
                <li>
                  <a href='h' className='flex items-center gap-2 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                    <RiDashboardLine/>
                    Ejemplo2
                  </a>
                </li>
                <li>
                  <a href='h' className='flex items-center gap-2 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                    <RiDashboardLine/>
                    Ejemplo3
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              {/* image */}
              <img src="img1.svg" alt="imagen"/>
              <div className="bg-purple-50 p-8 flex flex-col gap-4 rounded-3xl">
                <h3 className="text-xl text-center">get Upgrade</h3>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                </p>
                <button className="bg-purple-600 text-white p-2 rounded-lg">Learn More</button>
              </div>
            </div>
          </div>
      </div>
      <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl">
        {sidebar ?< RiCloseLine/>:<RiBarChartHorizontalLine/> }
        
      </button>
      {/* content */}
      <div className='col-span-4'>
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
        {/* content */}
        <div className="p-12 bg-gray-100">
          cotenido
        </div>
        
      </div>
    </div>
  );
}

export default App;
