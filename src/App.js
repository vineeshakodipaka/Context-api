import React, { useState,createContext } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './style.css';
import Home from './pages/Home'
import Prfile from './pages/Profile'
import Contactus from './pages/Contactus'
export const HelloContext=createContext()
export default function App() {
 const [data,setData]=useState("Welcome To 2023 ")
  return (
    <div>
    <HelloContext.Provider value={{data,setData}}>  
      <BrowserRouter>
           <Link to="/home">Home</Link>
           <Link to="/profile">Profile</Link>
           <Link to="/contact">Contact</Link>
         <Routes>
           <Route path="/home" element={<Home/>}/>
           <Route path="/profile" element={<Prfile/>}/>
           <Route path="/contact" element={<Contactus/>}/>
         </Routes>
      </BrowserRouter>
      </HelloContext.Provider>  
    
    </div>
  );
}
