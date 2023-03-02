import React, { useEffect, useState } from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

import axios from "axios";
const Navbar = () => {
  return (
    <div className="navbar">
    <h1><Link className="heading" to="/">Glucose Tracker</Link></h1>
    <div className="nav-options">
    <Link className="link" to="/"><h4>Home</h4></Link>

    <Link className="link" to="/profile"><h4>Profile</h4></Link>
    <Link className="link" to="/store"><h4>Store</h4></Link>
    <Link className="link" to="/show"><h4>Logs</h4></Link>
   </div>
      </div>
  )
}

export default Navbar