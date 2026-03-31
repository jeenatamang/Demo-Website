import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex items-center justify-between bg-gray-100 px-6 py-2' >
        <h1 className='text-2xl font-bold text-gray-800'>EduNepal</h1>
      <ul className='flex items-center space-x-8 text-gray-600'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/courses">Our Courses</NavLink></li>
          <li><NavLink to="/events">Event</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><a href="tel:+9779875640321">+977 9875640321</a></li>
      </ul>     
      <a href="/register">
        <button className='bg-sky-600 text-white rounded-lg px-5 py-2 cursor-pointer'>Register Now</button>
      </a>
    </div>
  )
}
export default Header;
