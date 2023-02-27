import React, {useState} from "react";

import Sidebar from "./template/Sidebar";
import Header from "./template/Header";



function App() {
  
  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-5 ">
      {/* sidebar */}
      < Sidebar />
      {/* sidebar */}

      {/* content */}
      <div className='col-span-4'>
        {/* header */}
        <Header />
        {/* header */}
        
        {/* inicio del esteespacio donde va todo el contenido */}
        <div className="p-12 bg-gray-100">
          cotenido
        </div>


        {/* fin del esteespacio donde va todo el contenido */}

      </div>
      {/* content */}
      
    </div>
  );
}

export default App;
