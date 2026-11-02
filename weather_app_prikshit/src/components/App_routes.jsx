import React from 'react'
import Home from './Home'
import Courses from './Courses'
import Div_motion from './Div_motion'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App_routes = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="flex justify-between w-full bg-blue-700 p-4 align-center">
          <div className="text-white text-3xl font-bold">My_site</div>
          <div className="flex gap-4 text-white text-2xl font-semibold cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/div_motion">Div_motion</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/div_motion" element={<Div_motion />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App_routes
