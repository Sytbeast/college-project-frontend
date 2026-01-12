import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => {
    return path === location.pathname
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Animal Diversity", path: "/animaldiversity" },
    { name: "Notes", path: "/notes" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/admin/login" },
  ]

  return (
    <div className='flex items-center justify-between backdrop:blur-lg px-4 py-5 text-xs lg:text-base shadow-2xl bg-slate-100'>
      <div className=' text-lg md:text-xl text-green-500'>
        <Link className='cursor-pointer text-xl font-dancing font-bold md:text-3xl' to="/">Kirodimal Degree College.</Link>
      </div>

      <ul className='hidden md:flex gap-5'>
        {navItems.map((item, index) => {
          return <li className="cursor-pointer" key={index}>
            <NavLink className={({isActive})=> isActive? "border-b-2 font-bold text-green-500":"hover:text-green-500"} to={item.path}>{item.name}</NavLink>
          </li>
        })}
      </ul>

      <RxHamburgerMenu className='md:hidden text-xl' onClick={() => setOpen(!open)} />

      <div className={`${open ? "translate-x-0" : "translate-x-full"} p-4 md:hidden text-sm transform transition-transform duration-300 fixed top-0 right-0 z-40 h-full min-w-[200px] rounded-l-md bg-slate-100`}>
        <div className='flex items-center justify-between pb-2 font-bold'>
          Menu
          <IoMdClose className='text-lg' onClick={() => setOpen(false)} />
        </div>
        
        <div className='w-2/3 h-[0.1px] text-slate-300 border rounded-2xl mx-auto'></div>

        <div className='pt-2 h-full'>
          <ul className='flex gap-2 flex-col items-center'>
            {navItems.map((item, index) => {
              return <li className={`cursor-pointer w-full p-2 rounded-l-full bg-gray-300 text-center ${isActive(item.path)? "bg-green-800": ""}`} key={index}>
                <NavLink onClick={()=>setOpen(false)} className={({isActive})=> isActive? "font-bold text-white":""} to={item.path}>{item.name}</NavLink>
              </li>
            })}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Navbar
