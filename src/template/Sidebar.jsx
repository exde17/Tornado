import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import { 
    RiDashboardLine,
    RiBarChartHorizontalLine,
    RiCloseLine,
    
} 
from "react-icons/ri";

const Sidebar = () => {
    const [ sidebar, setSidebar ]= useState(false)
    const handleSidebar= () =>{
        setSidebar(!sidebar)
      }
  return (
    <>
    <div className={`fixed lg:static w-[64%] md:w-[50%] lg:w-full top-0 z-50 bg-white transtion-all ${ sidebar ? "-left-0" :  "-left-full" }
    w-full h-full hoverflow-y-scroll col-span-1 p-8 border-r`}>
       {/* logo */}
       <div className='text-center p-8 rounded-full bg-gray-400'>
            <h1 className='uppercase font-bold tracking-[4px]'>logo</h1>
       </div>
       <div className="flex flex-col justify-between my-14 h-[600px]">
         {/* menu */}
         <nav>
           <ul>
             <li>
               <Link to={"/Lideres"} className='flex items-center gap-2 h-4 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                 <RiDashboardLine/>
                 Lideres
               </Link>
             </li>
             <li>
               <Link to={"/Segidores"} className='flex items-center gap-2 h-4 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                 <RiDashboardLine/>
                 Seguidores
               </Link>
             </li>
             <li>
               <a href='h' className='flex items-center gap-2 hover:bg-purple-600 h-4 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
                 <RiDashboardLine/>
                 Ejemplo2
               </a>
             </li>
             <li>
               <a href='h' className='flex items-center gap-2 h-4 hover:bg-purple-600 text-gray-400 p-4 hover:text-white rounded-lg transition-colors font-semibold'>
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
 {/* <Outlet/> */}
 </>
 
  )
}

export default Sidebar