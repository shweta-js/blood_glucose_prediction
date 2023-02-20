import React, { useEffect, useState } from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

import axios from "axios";
const Navbar = () => {
  return (
    <div className="navbar">
    <h1 className="heading">Glucose Tracker</h1>
    <div className="nav-options">
    <Link className="link" to="/profile"><h4>profile</h4></Link>
    <Link className="link" to="/store"><h4>store</h4></Link>
    <Link className="link" to="/show"><h4>show</h4></Link>
   </div>
      </div>
  )
}

export default Navbar