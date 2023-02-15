import { RiDashboardLine,
  RxBackpack,
  RiCalendarCheckFill
} 
from "react-icons/ri";



function App() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className='col-span-1 p-8'>
          {/* logo */}
          <div className='text-center p-8'>
               <h1 className='uppercase font-bold tracking-[4px]'>logo</h1>
          </div>
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
          <div>
            {/* image */}
            <img src="img1.svg"/>
          </div>
      </div>
      <div className='col-span-5'>Hola2</div>
    </div>
  );
}

export default App;
