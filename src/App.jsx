import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./template/Sidebar";
import Header from "./template/Header";
import FromLideres from "./template/FromLideres";
import FormSeguidores from "./template/FormSeguidores";
import Login from "./template/Login";
import Registro from "./template/Registro";


function App() {
  
  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-5 ">
      <BrowserRouter>
      {/* sidebar */}
      < Sidebar />
      {/* sidebar */}

      {/* content */}
      <div className='col-span-4'>
        {/* header */}
        <Header />
        {/* header */}
        
        {/* inicio del esteespacio donde va todo el contenido */}
        {/* <div className="p-12 bg-gray-100"> */}
          <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/Lideres" element={<FromLideres/>} />
            <Route path="/Segidores" element={<FormSeguidores/>} />
            <Route path="/Registro" element={<Registro/>}/>
            
          </Routes>
          {/* </div> */}
          </div>
        </BrowserRouter>
        {/* <div className="p-12 bg-gray-100">
          cotenido
        </div> */}


        {/* fin del esteespacio donde va todo el contenido */}

      
      {/* content */}
      
    </div>
  );
}

export default App;
